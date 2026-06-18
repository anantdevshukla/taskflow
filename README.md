# 🚀 TaskFlow — DOM Task Manager & Browser Internals Explorer

A modern **Task Manager Application** built using **HTML, CSS, and Vanilla JavaScript** that demonstrates real-world DOM manipulation techniques while visually explaining fundamental browser concepts such as:

* DOM Tree
* CSSOM Tree
* Render Tree
* Parsing
* Tokenization
* Attributes vs Properties
* Event Delegation
* Event Bubbling
* Event Capturing

This project was created as an educational assignment to understand how browsers work internally while building a practical application.

---

# 📸 Preview

TaskFlow combines:

✅ Task Management

✅ DOM Manipulation

✅ Event Delegation

✅ Browser Rendering Pipeline Visualization

✅ Attributes vs Properties Demonstration

✅ Modern Responsive UI

---

# 🎯 Learning Objectives

This project demonstrates:

### DOM Manipulation

* createElement()
* createTextNode()
* append()
* prepend()
* replaceWith()
* remove()

### DOM Attributes

* getAttribute()
* setAttribute()
* hasAttribute()
* data-* attributes

### Event Handling

* addEventListener()
* Event Bubbling
* Event Capturing
* Event Delegation

### Browser Internals

* Parsing
* Tokenization
* DOM Tree Construction
* CSSOM Tree Construction
* Render Tree Generation
* Layout (Reflow)
* Paint & Composite

---

# ✨ Features

## 📝 Task Management

Users can:

* Add tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed
* Clear all tasks

Tasks are rendered dynamically without page reloads.

---

## 💾 Local Storage Persistence

Tasks are automatically saved inside Local Storage.

When the page reloads:

* Existing tasks remain available
* Completion status is preserved
* Updates are retained

---

## 🔥 Event Delegation

Instead of attaching event listeners to every task button:

```javascript
taskList.addEventListener("click", handler);
```

A single listener is attached to the task container.

Benefits:

* Better performance
* Less memory consumption
* Easier maintenance
* Supports dynamically created elements

---

## 🏷 Attributes vs Properties Explorer

Interactive educational section demonstrating:

```html
<input value="Hello">
```

Difference between:

```javascript
input.getAttribute("value")
```

and

```javascript
input.value
```

### Attribute

* Stored in HTML
* Initial value
* Accessed via getAttribute()

### Property

* Stored in DOM object
* Current live value
* Changes with user interaction

---

## 🌊 Event Propagation Visualizer

### Event Bubbling

```text
Child
  ↑
Parent
  ↑
Grandparent
```

Execution Order:

```text
Child → Parent → Grandparent
```

### Event Capturing

```text
Grandparent
     ↓
Parent
     ↓
Child
```

Execution Order:

```text
Grandparent → Parent → Child
```

---

## 🌐 Browser Rendering Pipeline

The application includes a visual explanation of how browsers convert source code into pixels.

```text
HTML
 ↓
Parsing
 ↓
Tokenization
 ↓
DOM Tree

CSS
 ↓
Parsing
 ↓
Tokenization
 ↓
CSSOM Tree

DOM Tree + CSSOM Tree
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Composite
```

---

# 🏗 Project Structure

```text
TaskFlow/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
```

---

# ⚙️ Technologies Used

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript (ES6)

### Browser APIs

* DOM API
* Local Storage API
* Event API

### Design

* CSS Variables
* CSS Grid
* Flexbox
* Responsive Design
* Glassmorphism-inspired UI

---

# 📚 Concepts Demonstrated

## Parsing

The browser converts downloaded bytes into characters.

---

## Tokenization

Characters are converted into tokens such as:

* Start Tags
* End Tags
* Attributes
* Text Nodes

Example:

```html
<h1>Hello</h1>
```

becomes:

```text
StartTag(h1)
Text(Hello)
EndTag(h1)
```

---

## DOM Tree

Tokens are assembled into a hierarchical tree structure.

```text
Document
 └── html
      └── body
           └── h1
```

The DOM Tree is what JavaScript interacts with.

---

## CSSOM Tree

The browser parses CSS into another tree structure.

```css
h1 {
  color: orange;
}
```

becomes part of the CSSOM.

---

## Render Tree

The browser combines:

```text
DOM Tree
+
CSSOM Tree
```

to create:

```text
Render Tree
```

Only visible elements appear in the Render Tree.

Example:

```css
display: none;
```

Elements with display:none are excluded.

---

## Layout (Reflow)

The browser calculates:

* Width
* Height
* Position
* Margins

for every visible element.

---

## Paint & Composite

The browser converts layout information into actual pixels displayed on the screen.

---

# 🧠 DOM Methods Used

```javascript
createElement()
createTextNode()
append()
prepend()
replaceWith()
remove()
querySelector()
querySelectorAll()
closest()
```

---

# 🧠 Event Methods Used

```javascript
addEventListener()
event.target
event.currentTarget
closest()
```

---
# 📱 Responsive Design

The UI adapts to:

* Desktop
* Tablet
* Mobile

using:

* CSS Grid
* Flexbox
* Media Queries

---


# 🎓 Assignment Requirements Covered

| Requirement                | Status |
| -------------------------- | ------ |
| Dynamic DOM Creation       | ✅      |
| Attributes vs Properties   | ✅      |
| Event Delegation           | ✅      |
| Event Bubbling             | ✅      |
| Event Capturing            | ✅      |
| DOM Manipulation Methods   | ✅      |
| Browser Rendering Pipeline | ✅      |
| Local Storage              | ✅      |
| Responsive UI              | ✅      |
| Vanilla JavaScript Only    | ✅      |

---

# 🏆 Key Takeaway

TaskFlow is more than a task manager. It is an interactive educational project that demonstrates how modern browsers process HTML, CSS, and JavaScript while showcasing practical DOM manipulation techniques used in real-world web applications.

Built entirely with ❤️ using HTML, CSS, and Vanilla JavaScript.
