document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskDueDate = document.getElementById("taskDueDate");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value;
        const taskDate = taskDueDate.value;

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${taskText} ${taskDate ? `- Due: ${new Date(taskDate).toLocaleString()}` : ''}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
        taskDueDate.value = '';

        const editButton = li.querySelector(".edit");
        editButton.addEventListener("click", () => editTask(taskText, taskDate, li));

        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", () => li.remove());

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
    }

    function editTask(taskText, taskDate, li) {
        taskInput.value = taskText;
        taskDueDate.value = taskDate;
        li.remove();
        taskInput.focus();
    }
});