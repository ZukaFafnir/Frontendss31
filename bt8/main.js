let tasksList = [
    { id: 1, taskName: "Learn JavaScript" },
    { id: 2, taskName: "Learn React" },
    { id: 3, taskName: "Learn Node" },
  ];
  function showTask() {
    const list = document.getElementById("myUL");
    list.innerHTML = "";
    tasksList.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.taskName;
  
      const span = document.createElement("span");
      span.textContent = "X";
      span.className = "close";
  
      li.appendChild(span);
      list.appendChild(li);
    });
  } 
  function addTask() {
    const input = document.getElementById("myInput");
    const taskName = input.value.trim();
    if (taskName === "") {
      alert("Vui lòng nhập nội dung công việc!");
      return;
    }
    const newTask = {
      id: tasksList.length > 0 ? tasksList[tasksList.length - 1].id + 1 : 1,
      taskName: taskName,
    };
    tasksList.push(newTask);
    input.value = ""; 
    showTask();     
  }
  document.querySelector(".addBtn").addEventListener("click", addTask);
  showTask();
  