document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const task = taskInput.value;
        if (task) {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});
