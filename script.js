let tasks = JSON.parse(localStorage.getItem('taskflow-tasks') || '[]');

const taskTitleInput = document.getElementById('task-title');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const taskCardTemplate = document.getElementById('task-card-template');

const inspectBtn = document.getElementById('inspect-btn');
const propValEl = document.getElementById('prop-val');
const attrValEl = document.getElementById('attr-val');

const emptyState = document.getElementById('empty-state');
const clearAllBtn = document.getElementById('clear-all-btn');

const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container';
document.body.append(toastContainer);

function generateId() {
  return 'task-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
}

function saveTasks() {
  localStorage.setItem('taskflow-tasks', JSON.stringify(tasks));
}

function createTaskCard(task) {
  const card = taskCardTemplate.content.cloneNode(true).querySelector('.task-card');

  card.setAttribute('data-id', task.id);
  card.setAttribute('data-status', task.status);

  const titleEl = card.querySelector('.task-title-text');
  titleEl.appendChild(document.createTextNode(task.title));

  if (task.status === 'completed') {
    const icon = card.querySelector('.action-icon');
    icon.textContent = '✓';
    card.querySelector('.task-action--complete').style.borderColor = 'var(--success)';
  }

  return card;
}

function addTask() {
  const title = taskTitleInput.value.trim();

  if (!title) {
    taskTitleInput.focus();
    showToast('Please enter a task title.', 'default');
    return;
  }

  if (tasks.length >= 5) {
    showToast('Task limit reached. Delete a task to add a new one.', 'danger');
    return;
  }

  const task = { id: generateId(), title, status: 'pending' };
  tasks.unshift(task);
  saveTasks();

  const card = createTaskCard(task);
  taskList.prepend(card);

  taskTitleInput.value = '';
  updateEmptyState();
  showToast('Task added!', 'success');
}

function deleteTask(card, taskId) {
  card.style.transition = 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
  card.style.opacity = '0';
  card.style.transform = 'translateX(20px)';
  
  setTimeout(() => {
    card.remove();
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks();
    updateEmptyState();
  }, 250);
  
  showToast('Task deleted.', 'danger');
}

function toggleComplete(card, taskId) {
  const current = card.getAttribute('data-status');
  const next = current === 'completed' ? 'pending' : 'completed';

  card.setAttribute('data-status', next);

  const icon = card.querySelector('.action-icon');
  icon.textContent = next === 'completed' ? '✓' : '○';

  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.status = next;
    saveTasks();
  }

  showToast(next === 'completed' ? 'Task completed! ✓' : 'Task marked pending.', 'success');
}

function editTask(card, taskId) {
  const titleEl = card.querySelector('.task-title-text');
  const current = titleEl.textContent;

  const input = document.createElement('input');
  input.className = 'task-edit-input';
  input.type = 'text';
  input.value = current;

  titleEl.replaceWith(input);
  input.focus();
  input.select();

  function saveEdit() {
    const newTitle = input.value.trim() || current;

    const newTitleEl = document.createElement('p');
    newTitleEl.className = 'task-title-text';
    newTitleEl.appendChild(document.createTextNode(newTitle));

    input.replaceWith(newTitleEl);

    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.title = newTitle;
      saveTasks();
    }
    showToast('Task updated.', 'success');
  }

  input.addEventListener('blur', saveEdit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      input.blur();
    }
    if (e.key === 'Escape') {
      input.value = current;
      input.blur();
    }
  });
}

function clearAllTasks() {
  if (tasks.length === 0) return;
  if (!confirm('Clear all tasks?')) return;
  
  tasks = [];
  saveTasks();
  taskList.innerHTML = '';
  updateEmptyState();
  showToast('All tasks cleared.', 'danger');
}

function updateEmptyState() {
  const hasTasks = taskList.querySelectorAll('.task-card').length > 0;
  emptyState.classList.toggle('visible', !hasTasks);
}

function showToast(message, type = 'default') {
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.appendChild(document.createTextNode(message));
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease forwards';
    toast.addEventListener('animationend', () => toast.remove());
  }, 2800);
}

function loadTasksFromStorage() {
  if (tasks.length === 0) {
    updateEmptyState();
    return;
  }
  if (tasks.length > 5) {
    tasks = tasks.slice(0, 5);
    saveTasks();
  }
  const frag = document.createDocumentFragment();
  tasks.forEach(task => frag.appendChild(createTaskCard(task)));
  taskList.appendChild(frag);
  updateEmptyState();
}

addTaskBtn.addEventListener('click', addTask);
taskTitleInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

taskList.addEventListener('click', (e) => {
  const actionBtn = e.target.closest('[data-action]');
  if (!actionBtn) return;

  const card = actionBtn.closest('.task-card');
  if (!card) return;

  const taskId = card.getAttribute('data-id');
  const action = actionBtn.getAttribute('data-action');

  if (action === 'delete') deleteTask(card, taskId);
  else if (action === 'complete') toggleComplete(card, taskId);
  else if (action === 'edit') editTask(card, taskId);
});

inspectBtn.addEventListener('click', () => {
  propValEl.textContent = `"${taskTitleInput.value}"`;
  attrValEl.textContent = `"${taskTitleInput.getAttribute('value') ?? ''}"`;
});

clearAllBtn.addEventListener('click', clearAllTasks);

loadTasksFromStorage();
