let tasks = [];

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const displayDiv = document.getElementById('display');

function render() {
    displayDiv.innerHTML = "";
    
    for (let i = 0; i < tasks.length; i++) {
        let p = document.createElement('p');
        p.textContent = tasks[i];
        displayDiv.appendChild(p);
    }
}
function addTask() {
    
    tasks.push(taskInput.value);
    taskInput.value = "";
    
    render();
}

addButton.addEventListener('click', addTask);