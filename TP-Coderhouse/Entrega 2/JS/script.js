document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Mostrar tareas en la lista
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");
            if (task.completed) taskItem.classList.add("completed");

            taskItem.innerHTML = `
                <span>${task.name} - ${task.deadline}</span>
                <button onclick="toggleTask(${index})">${task.completed ? "Desmarcar" : "Completar"}</button>
                <button onclick="deleteTask(${index})">Eliminar</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // Agregar nueva tarea
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskName = document.getElementById("taskName").value;
        const taskDeadline = document.getElementById("taskDeadline").value;
        if (taskName.trim() === "" || taskDeadline.trim() === "") return;

        tasks.push({ name: taskName, deadline: taskDeadline, completed: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskForm.reset();
        renderTasks();
    });

    // Marcar o desmarcar tarea como completada
    window.toggleTask = (index) => {
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    };

    // Eliminar una tarea
    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    };

    renderTasks();
});
