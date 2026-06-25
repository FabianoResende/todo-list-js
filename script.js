const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <span onclick="removeTask(this)">✖</span>
    `;

    taskList.appendChild(li);
    input.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}
