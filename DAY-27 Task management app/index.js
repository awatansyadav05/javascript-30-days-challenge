
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

       
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

     
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        
        listItem.appendChild(taskContent);
        listItem.appendChild(deleteBtn);

       
        taskList.appendChild(listItem);

       
        taskInput.value = '';
    }
}


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
