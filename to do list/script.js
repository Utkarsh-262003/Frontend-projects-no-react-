const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
// could have also q=used query selector it is more popular
// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
 
  deleteBtn.onclick = () => {
    li.remove();
  };


  li.onclick = () => {
    li.classList.toggle("completed");
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

 
  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
