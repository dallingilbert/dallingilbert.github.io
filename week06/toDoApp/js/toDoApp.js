class ToDoModel {
  constructor() {
    this.toDoArr = [
      { id: 1, text: "Take a nap", isDone: false },
      { id: 2, text: "Work on homework", isDone: false },
      { id: 3, text: "Go to grocery store", isDone: false },
    ];
  }

  addItem(todoText){
    const toDoItem = {
      id:
        this.toDoArr.length > 0
          ? this.toDoArr[this.toDoArr.length - 1].id + 1
          : 1,
      text: todoText,
      isDone: false,
    };

    this.toDoArr.push(toDoItem);
    this.onToDoListChanged(this.toDoArr);
    this._commit(this.toDoArr);
  };

  deleteItem(id) {
    this.toDoArr = this.toDoArr.filter((toDoItem) => toDoItem.id !== id);

    this.onToDoListChanged(this.toDoArr);
    this._commit(this.toDoArr);
  }

  markComplete(id) {
    this.toDoArr = this.toDoArr.map((toDoItem) =>
      toDoItem.id === id
        ? { id: toDoItem.id, text: toDoItem.text, isDone: !toDoItem.isDone }
        : toDoItem
    );
    this.onToDoListChanged(this.toDoArr);
    this._commit(this.toDoArr);
  }

  bindToDoListChanged(callback) {
    this.onToDoListChanged = callback;
  }

  _commit(toDoArr) {
      this.onToDoListChanged(toDoArr);
      localStorage.setItem('toDoArr', JSON.stringify(toDoArr));
  }
}

class ToDoView {
  constructor() {
    // The root element
    this.app = this.getElement("#toDoList");

    // The title of the app
    this.title = this.createElement("h1");
    this.title.textContent = "Todo List";

    // The form, with a [type="text"] input, and a submit button
    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Add Item";

    // The visual representation of the todo list
    this.todoList = this.createElement("ul", "todo-list");

    // Append the input and submit button to the form
    this.form.append(this.input, this.submitButton);

    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.form, this.todoList);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  displayTodos(todos) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create todo item nodes for each todo in state
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;

        // Each todo item will have a checkbox you can toggle
        const checkbox = this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.isDone;

        // The todo item text will be in a contenteditable span
        const span = this.createElement("span");
        span.contentEditable = true;
        span.classList.add("editable");

        // If the todo is complete, it will have a strikethrough
        if (todo.isDone) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          // Otherwise just display the text
          span.textContent = todo.text;
        }

        // The todos will also have a delete button
        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "x";
        li.append(checkbox, span, deleteButton);

        // Append nodes to the todo list
        this.todoList.append(li);
      });
    }
  }

  // Add handlers to bind
  bindAddTodo(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteItem(handler) {
    this.todoList.addEventListener("click", (event) => {
      if (event.target.className === "delete") {
        const id = parseInt(event.target.parentElement.id);

        handler(id);
      }
    });
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener("change", (event) => {
      if (event.target.type === "checkbox") {
        const id = parseInt(event.target.parentElement.id);

        handler(id);
      }
    });
  }
}

class ToDoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Display initial todo list
    this.view.bindAddTodo(this.handleAddItem);
    this.view.bindDeleteItem(this.handleDeleteItem);
    this.view.bindToggleTodo(this.handleComplete);
    this.model.bindToDoListChanged(this.onToDoListChanged);
    this.onToDoListChanged(this.model.toDoArr);
  }

  onToDoListChanged = (todos) => {
    this.view.displayTodos(todos);
  };

  // Create handlers for model
  handleAddItem = (todoText) => {
    this.model.addItem(todoText);
  };

  handleDeleteItem = (id) => {
    this.model.deleteItem(id);
  };

  handleComplete = (id) => {
    this.model.markComplete(id);
  };
}

const app = new ToDoController(new ToDoModel(), new ToDoView());
