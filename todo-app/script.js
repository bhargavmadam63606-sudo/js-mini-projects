const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="this.parentElement.classList.toggle('completed')">${taskText}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}
