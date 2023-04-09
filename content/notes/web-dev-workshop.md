---
external: false
draft: false
title: "[HackMelbourne] Web Development Workshop"
description: "Learn to the basics of HTML, CSS and JavaScript (ReactJS) while building a To Do List app."
date: 2023-09-04
---

> Slides: TODO

## 1 SETUP

### Step 1.1: Create a GitHub Repository

1. Login or Sign Up to [GitHub](https://github.com/)
2. Create a new repository

### Step 1.2: Setup your coding environment

- There are many ways to create your web development environment but we'll be covering 2 ways:

#### 1.2a Code Sandbox (Online)

1. Go to your github repo
2. Replace `github.com` with `githubbox.com`
3. It will redirect you to a code sandbox - where you can start coding - yay!

OR

1. Just go straight to [https://codesandbox.io/](https://codesandbox.io/), login via GitHub, create a sandbox and start coding -- then we will create the repository later

#### 1.2b VSCode (Offline)

1. Download VSCode
2. Download Node.js (allows us to run JavaScript locally)
   - Windows Download: [https://nodejs.org/dist/v16.17.1/node-v16.17.1-x64.msi](https://nodejs.org/dist/v16.17.1/node-v16.17.1-x64.msi)
   - Mac Download: [https://nodejs.org/dist/v16.17.1/node-v16.17.1.pkg](https://nodejs.org/dist/v16.17.1/node-v16.17.1.pkg)
   - Linux Download: [https://nodejs.org/dist/v16.17.1/node-v16.17.1-linux-x64.tar.xz](https://nodejs.org/dist/v16.17.1/node-v16.17.1-linux-x64.tar.xz)
3. Download Git
   - Windows Download: [https://git-scm.com/download/win](https://git-scm.com/download/win)
   - Mac Download: [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
   - Linux Download: [https://git-scm.com/download/linux](https://git-scm.com/download/linux)
4. Download Extensions:
   - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
5. Clone the repository to your local folder
   - `Ctrl + Shift + P` --> `Git: Clone`
6. If this is your first time using git, you'll have to setup your [Git Configs](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

   ```c
   // Type this in your Terminal or Git Bash

   // Setup your username
   git config --global user.name "John Doe"

   // Setup your password
   git config --global user.email johndoe@example.com
   ```

7. And depending on your repository's privacy settings, you might have to setup your [GitHub credentials](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git)

---

## 2 Ingredients for the Web

{% codepen url="https://codepen.io/chuahxinyu/pen/KKZbgqa" title="CodePen Home HTML, CSS, JavaScript, React Bulb Example by Xin Yu" /%}

---

## 4 BUILDING THE TO-DO LIST APP

### 4.1 Creating a React Project with Vite

> [Vite](https://vitejs.dev/guide/) is a tool that helps you build and run web applications faster and more efficiently, making it easier to develop modern web projects using popular JavaScript frameworks.

#### 4.1a If You're using Local Development

1. If you are coding locally (ie. using VSCode or other text editor), open a new empty folder (to store your project) and run the following command to run Vite's command line tool
   ```shell
   npm create vite@latest .
   ```
   - > ⚠️ If you are getting an error like `npm not found` or `'npm' is not recognized as an internal or external command`, make sure you've installed [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) -- more information can be found in [Setup](1-setup.md)
   - Project name: `todo-list-workshop` (or whatever you want to name your project)
   - Framework: `React`
2. Next, run `npm install`
   ```shell
   npm install
   ```
   - this will install all of the necessary packages for a basic React app
   - the installed packages will be stored in the `node_modules` folder (it will automatically just pop into your current project)
3. ```shell
   npm run dev
   ```

#### 4.1b If You're using CodeSandbox

- Fork this sandbox: https://codesandbox.io/s/qrf93

### 4.2 Intro to React

- Let's start out by understanding the basic structure of a component in React:

```jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
    </div>
  );
}

export default App;
```

![](/assets/workshops/2023-03-25-00-55-40.png)

### 4.3 Writing the HTML

```jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form>
        <input placeholder="Enter a new task"></input>
        <button type="submit">New Entry</button>
      </form>
      <ul>
        <li>Test Item 1</li>
        <li>Test Item 2</li>
        <li>Test Item 3</li>
      </ul>
    </div>
  );
}

export default App;
```

![](/assets/workshops/2023-03-25-00-56-11.png)

### React States with useState

```jsx
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form>
        <input placeholder="Enter a new task"></input>
        <button type="submit">New Entry</button>
      </form>
      <ul>
        <li>Test Item 1</li>
        <li>Test Item 2</li>
        <li>Test Item 3</li>
      </ul>
    </div>
  );
}

export default App;
```

### JavaScript Functions

#### `createTodo`

```jsx
// In App.jsx, within the App() function, before the return
...
  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };
...
```

#### `toggleDone`

```jsx
// In App.jsx, within the App() function, before the return
...
  const toggleDone = (id) => {
    const todoId = todos.findIndex((entry) => entry.id === id);
    todos[todoId].done = !todos[todoId].done;
    setTodos([...todos]);
  };
...
```

#### `deleteTodo`

```jsx
// In App.jsx, within the App() function, before the return
...
  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((entry) => entry.id !== id);
    setTodos(updatedTodo);
  };
...
```

#### Local Storage

```jsx
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos) {
    setTodos(savedTodos);
  }
}, []);

useEffect(() => {
  if (todos.length > 0) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}, [todos]);
```

#### Final App.jsx

![](/assets/workshops/javascript-functions-result.gif)

```jsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleDone = (id) => {
    const todoId = todos.findIndex((entry) => entry.id === id);
    todos[todoId].done = !todos[todoId].done;
    setTodos([...todos]);
  };

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((entry) => entry.id !== id);
    setTodos(updatedTodo);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title === "") {
            alert("Cannot add an empty task");
            return;
          }
          createTodo(title);
          setTitle("");
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
          placeholder="Enter a new task"
        ></input>
        <button type="submit">New Entry</button>
      </form>
      <ul>
        {todos.map((entry, i) => (
          <li key={entry.id} className={entry.done ? "done" : ""}>
            <input type="checkbox" onChange={() => toggleDone(entry.id)} />
            {i}. {entry.title}
            <button
              onClick={() => {
                deleteTodo(entry.id);
              }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### Making it Pretty with CSS
