document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    if (!taskInput) {
        console.error("Error: taskInput element not found.");
        return;
    }
    
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        console.error("Error: Task text cannot be empty.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        status: "לביצוע",
        completed: false
    };
    
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    taskInput.value = "";
    renderTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function renderTasks() {
    const taskLists = {
        "לביצוע": document.getElementById("todoList"),
        "בהמתנה": document.getElementById("pendingList"),
        "הושלם": document.getElementById("completedList")
    };
    
    Object.keys(taskLists).forEach(status => {
        if (!taskLists[status]) {
            console.error(`Error: List for status '${status}' not found.`);
            return;
        }
        taskLists[status].innerHTML = "";
    });

    let tasks = getTasks();
    tasks.forEach(task => {
        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.textContent = task.text;
        span.contentEditable = false;
        li.appendChild(span);
        
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.classList.add("edit-btn");
        editBtn.onclick = function () {
            editTask(task.id, span);
        };
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            deleteTask(task.id);
        };
        
        li.draggable = true;
        li.dataset.id = task.id;
        li.classList.add(getStatusClass(task.status));
        li.style.border = `3px solid ${getBorderColor(task.status)}`;
        
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        
        li.addEventListener("dragstart", dragStart);
        
        if (taskLists[task.status]) {
            taskLists[task.status].appendChild(li);
        }
    });
}

function editTask(id, span) {
    let tasks = getTasks();
    let task = tasks.find(t => t.id === id);
    if (task) {
        if (span.contentEditable === "true") {
            span.contentEditable = "false";
            task.text = span.textContent;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        } else {
            span.contentEditable = "true";
            span.focus();
        }
    }
}

function deleteTask(id) {
    let tasks = getTasks().filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function resetTasks() {
    localStorage.removeItem("tasks");
    renderTasks();
}

function getStatusClass(status) {
    switch (status) {
        case "לביצוע": return "todo";
        case "בהמתנה": return "pending";
        case "הושלם": return "completed";
        default: return "";
    }
}

function getBorderColor(status) {
    switch (status) {
        case "לביצוע": return "blue";
        case "בהמתנה": return "orange";
        case "הושלם": return "green";
        default: return "gray";
    }
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.dataset.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const targetList = event.target.closest(".task-list");
    if (!targetList) return;
    const newStatus = targetList.getAttribute("data-status");
    
    let tasks = getTasks();
    tasks = tasks.map(task => task.id == taskId ? { ...task, status: newStatus } : task);
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

document.querySelectorAll(".task-list").forEach(list => {
    list.addEventListener("dragover", allowDrop);
    list.addEventListener("drop", drop);
});

function loadTasks() {
    renderTasks();
}
