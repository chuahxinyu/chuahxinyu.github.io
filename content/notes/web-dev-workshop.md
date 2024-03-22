---
external: false
draft: false
title: "[HackMelbourne] Web Development Workshop"
description: "Learn to the basics of HTML, CSS and JavaScript (ReactJS) while building a To Do List app."
date: 2023-04-09
---

> Slides: [Web Development Workshop Google Slides](https://docs.google.com/presentation/d/1SR-N2hrvNSth4RuIw_Q_f49rc3JapMdW7VecEDjME0Q/edit?usp=sharing)

## 1 SETUP

### 1.0: Make sure you have a GitHub Account (especially if you want to deploy your website)

- If you've completed the "Git/GitHub Workshop", this step is probably already done - just make sure you are logged in to GitHub!
- Create a GitHub Account here: [https://github.com/signup](https://github.com/signup)

### 1.1: Pick your poison 🧪

- There are many ways to create your web development environment but we'll be covering 2 ways:
  - Code Sandbox (Online)
  - Local Code Editor (Offline)

![Pros and Cons of Different Dev Environments](/assets/workshops/pick-dev-env.excalidraw.png)

### 1.2: Setup your coding environment

#### 1.2a Code Sandbox (Online)

1. Go to the [codesandbox.io Website](https://codesandbox.io/dashboard) Click on "Sign in with GitHub" when prompted
   - Go back to [Step 1.0](#step-10-make-sure-you-have-a-github-account-especially-if-you-want-to-deploy-your-website) if you don't have a GitHub account
   - We are using GitHub to sign in so we can copy the sandbox as a repository later on, which will then allow us to use GitHub Pages to deploy the website

{% toast type="col-detail" summary="Other Deployment Options for Code Sandbox" %}

It is worth noting that Code Sandbox also offers other deployment options that are relatively easy and straightforward as well.

![](/assets/workshops/2023-04-09-18-11-58.png)

{% /toast %}

#### 1.2b Local Development (Offline)

1.  Download [VSCode](https://code.visualstudio.com/download)
    - other code editors can also be used, though this workshop will focus on VSCode
2.  Download [Node.js](https://nodejs.org/en/download) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (allows us to run JavaScript locally)
3.  Download [Git](https://git-scm.com/downloads)
4.  Download Extensions (technically optional but highly recommended for a better developer experience):
    - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    - [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
5.  Clone the starter code from the [`starter` branch] of the Workshop's

    - You can use VSCode's GUI: `Ctrl/Cmd + Shift + P` --> `Git: Clone` --> put in the starter branch url: https://github.com/HackMelbourne/todo-list-workshop.git
    - or the command line command:

    ```c
    git clone https://github.com/HackMelbourne/todo-list-workshop.git
    ```

    {% toast type="col-detail" summary="How to create the starter code on your own" %}

    The starter code was generated using the Vite CLI tool, if you would like to create another project from scratch later on, you can either start with the starter code or use the Vite CLI tool to create the starter code from an empty project.

    Open a new empty folder (to store your project) and run the following command to run Vite's command line tool

    ```shell
    npm create vite@latest .
    ```

    - Select `React` as your framework
    - Select `JavaScript` as your variant
    - This should generate a few files into your directory

    ![](/assets/workshops/Vite.gif)

    After running this, we've cleared all content in `index.css` and `App.css` (we'll write our own CSS later). And made some minor changes to `App.jsx` which you can find [below](#32-intro-to-react).

    {% /toast %}

6.  Run `npm install`

    - ```shell
      npm install
      ```
    - this will install all of the necessary packages for a basic React app
    - the installed packages will be stored in the `node_modules` folder (it will automatically just pop into your current project)

7.  If this is your first time using git, you'll have to setup your [Git Configs](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

    ```c
    // Type this in your Terminal or Git Bash

    // Setup your username
    git config --global user.name "John Doe"

    // Setup your password
    git config --global user.email johndoe@example.com
    ```

8.  And depending on your repository's privacy settings, you might have to setup your [GitHub credentials](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git)

---

## 2 Ingredients for the Web

{% codepen url="https://codepen.io/cindyc-dev/pen/KKZbgqa" title="CodePen Home HTML, CSS, JavaScript, React Bulb Example by Xin Yu" /%}

### 2.1 HTML

> https://www.w3schools.com/html/default.asp

{% codepen url="https://codepen.io/cindyc-dev/pen/gOBbyZg" title="HTML Basics by Xin Yu" /%}

### 2.2 CSS

> https://www.w3schools.com/css/

{% codepen url="https://codepen.io/cindyc-dev/pen/PoyqqJE" title="CSS Basics (Starter) by Xin Yu" /%}

{% codepen url="https://codepen.io/cindyc-dev/pen/WNabWWM" title="CSS Basics (Answer) by Xin Yu" /%}

### 2.3 JavaScript

> https://www.w3schools.com/js/

---

## 3 BUILDING THE TO-DO LIST APP

This is what we'll be creating

### 3.1 Creating a React Project with Vite

- Once all the setup from Step 1 and 3.1 are done, you should have a basic Vite Project
- [Vite](https://vitejs.dev/guide/) is a tool that helps you build and run web applications faster and more efficiently, making it easier to develop modern web projects using popular JavaScript frameworks

#### 3.1a If You're using Local Development

1. Make sure you've either cloned the
2. Run `npm install`
   - ```shell
     npm install
     ```
   - this will install all of the necessary packages for a basic React app - the installed packages will be stored in the `node_modules` folder (it will automatically just pop into your current project)
3. Run `npm run dev` to run the development server
   ```shell
   npm run dev
   ```

#### 3.1b If You're using CodeSandbox

1. Fork [this Sandbox](https://codesandbox.io/s/webdev-workshop-starter-c9v04w?file=/src/App.js)

{% codesandbox url="https://codesandbox.io/embed/webdev-workshop-starter-c9v04w?fontsize=14&hidenavigation=1&theme=dark" title="webdev-workshop-starter" /%}

### 3.2 Intro to React

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

### 3.3 Writing the HTML

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

### 3.4 React States with useState

- We'll be storing To Do Items as JavaScript Objects in an array
  ```js
  // To Do Item Structure
  {
    id: 1,              // integer
    title: "Buy Milk",  // string
    done: false,        // boolean
  },
  ```

```jsx
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Buy Milk",
      done: false,
    },
    {
      id: 2,
      title: "Call Alistair",
      done: false,
    },
  ]);

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form>
        <input placeholder="Enter a new task"></input>
        <button type="submit">New Entry</button>
      </form>
      <ul>
        {todos.map((task, i) => (
          <li key={task.id}>
            {i + 1}. {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

#### 3.4a Adding A Checkbox and Trash Can

```jsx
// In App.jsx, replace the <ul> and <li>s with....

<ul>
  {/* Map over the todos state array and render a list item for each todo */}
  {todos.map((task, i) => (
    <li key={task.id} className={task.done ? "done" : ""}>
      <input type="checkbox" />
      <span className="title">
        {i + 1}. {task.title}
      </span>
      <button>🗑️</button>
    </li>
  ))}
</ul>
```

### 3.5 JavaScript Functions

#### 3.5a createTodo

To create a task, the user enters the title of the new task into the text box and clicks on the "New Task" button.

We first have to be able to get the input values from the text `<input>` element. We do this by

Next, we have to handle the form submission. When the "New Task" button is clicked, it submits the `<form>` (because we set the `type="submit"` attribute for that button). We can control what happens when the form is submitted by passing in a function to the `onSubmit` event handler.

```jsx
<form
  onSubmit={(e) => {
    // Prevent the default form submission behaviour (which reloads the page)
    e.preventDefault();

    // Check if the user's input is empty
    if (title === "") {
      alert("Cannot add an empty task");
      return;
    }

    // Create the todo
    createTodo(title);

    // Empty the input textbox
    setTitle("");
  }}
>
```

We call a function called `createTodo()`, let's define that function

```jsx
// In App.jsx, within the App() function, before the return
...
  // Define function to create a new todo item
  const createTodo = (title) => {
    const lastTodoId = todos.length > 0 ? todos[todos.length - 1].id : 0;
    const newTodo = {
      id: lastTodoId + 1,
      title: title,
      done: false,
    };
    // Add newTodo to the todos state array using setTodos
    setTodos([...todos, newTodo]);
  };
...
```

#### 3.5b toggleDone

Let's add the functionality to toggle a task's `done` property when a user clicks on a task's checkbox.

We once again make use of the `onChange` handler but in the checkbox. When a user clicks on the checkbox, the `onChange` handler is triggered - let's make it call a function `toggleDone()`. We should also set the checkbox state to follow the `done` property by setting the `checked` attribute accordingly.

```jsx
<input
  type="checkbox"
  onChange={() => toggleDone(task.id)}
  checked={task.done}
/>
```

Let's define the function of `toggleDone()`

```jsx
// In App.jsx, within the App() function, before the return
...
  // Define function to toggle the 'done' property of a todo item
  const toggleDone = (id) => {
    // Find the index of the todo item with the matching id
    const todoId = todos.findIndex((task) => task.id === id);
    // Toggle the 'done' property of the todo item
    todos[todoId].done = !todos[todoId].done;
    // Update the todos state array using setTodos
    setTodos([...todos]);
  };
...
```

Adding the strikethrough style to the title of done tasks can be done as follows

```css
/* In App.css */
ul li.done .title {
  text-decoration: line-through;
  color: #bbb;
}
```

#### 3.5c deleteTodo

We want to delete a todo when the user clicks on the trash button (🗑️). To control what happens when the button is pressed, we can use the `onClick` event handler - it runs when the user clicks on whatever element the `onClick` is in. Let's make the `<button>`s handler call a `deleteTodo()` function.

```jsx
<button
  onClick={() => {
    deleteTodo(task.id);
  }}
>
  🗑️
</button>
```

Let's define the `deleteTodo()` function as follows

```jsx
// In App.jsx, within the App() function, before the return
...
  // Define function to delete a todo item
  const deleteTodo = (id) => {
    // Remove the todo item with the matching id from the todos state array
    const updatedTodo = todos.filter((task) => task.id !== id);
    // Update the todos state array using setTodos
    setTodos(updatedTodo);
  };
...
```

#### 3.5d Local Storage

Great! Now we have the basic functionalities of being able to create, delete and toggle to do tasks. But you will soon realise that when we reload the page, our app does not store our tasks anywhere and refresh back to the default state of `todos` (an empty array), which basiclly deyeets all of our tasks!

Let's add some functionality to store the tasks within the browser's local storage

```jsx
// In App.jsx, within the App() function, before the return
...
  // Load todos from localStorage when the component mounts using useEffect hook
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to localStorage when the todos state array changes using useEffect hook
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.removeItem("todos");
    }
  }, [todos]);
...
```

#### Final Product of HTML and JS

{% codesandbox url="https://codesandbox.io/embed/webdev-workshop-html-js-final-1vx0sz?fontsize=14&hidenavigation=1&theme=dark" title="webdev-workshop-html-js-final" /%}

#### Extension Functions

- Want to extend functionality of your application further? Here are some ideas of features you can add:

1. Reorder Items
2. Edit Task
3. Add Due Dates or Priority Levels to Tasks
4. Show To Do List Progress using a progress bar or percentage
5. Add a search bar to be able to search for a specific task

> Need help? Feel free to ask the Education Team during the workshop 🙋 or ping us on the [HackMelbourne Discord]()!

### Making it Pretty with CSS

```css
/* Set the font and background color of the app */
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

/* Center the app container */
.App {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Style the app title */
h1 {
  text-align: center;
  color: #444;
}

/* Style the form input and button */
form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
}

form input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

form button[type="submit"] {
  background-color: #4caf50;
  color: white;
  min-width: fit-content;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

form button[type="submit"]:hover {
  background-color: #3e8e41;
}

/* Style the todo list */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Style the todo items */
ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

/* Style the todo item label and checkbox */
ul li label {
  display: flex;
  align-items: center;
}

ul li label input[type="checkbox"] {
  margin-right: 10px;
}

/* Style the todo item title */
ul li .title {
  padding-left: 1rem;
  flex-grow: 1;
}

ul li.done .title {
  text-decoration: line-through;
  color: #bbb;
}

/* Style the todo item delete button */
ul li button {
  background-color: #f44336;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

ul li button:hover {
  background-color: #d32f2f;
}
```

### Tada 🎉

{% codesandbox url="https://codesandbox.io/embed/webdev-workshop-final-ipinll?fontsize=14&hidenavigation=1&theme=dark" title="webdev-workshop-final" /%}
