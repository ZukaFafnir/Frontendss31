const todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false }
  ];
  const list = document.getElementById("myUL");
  function createListItem(todo) {
    const li = document.createElement("li");
    li.textContent = todo.task;
    if (todo.completed) {
      li.classList.add("checked");
    }
    const span = document.createElement("span");
    span.textContent = "X";
    span.className = "close";
    span.onclick = function () {
      li.remove();
    };
    li.appendChild(span);
    li.onclick = function (e) {
      if (e.target.tagName !== "LI") return;
      li.classList.toggle("checked");
    };
  
    list.appendChild(li);
  }
  todoList.forEach(createListItem);
  document.querySelector(".addBtn").onclick = function () {
    const input = document.getElementById("myInput");
    const value = input.value.trim();
    if (value !== "") {
      const newTodo = { id: Date.now(), task: value, completed: false };
      createListItem(newTodo);
      input.value = "";
    } else {
      alert("Please enter a task!");
    }
  };
  