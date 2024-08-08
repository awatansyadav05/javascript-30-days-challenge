const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = []; // Array to hold task objects
let isEditing = false; // Flag to check if we're in edit mode
let editingTaskIndex = null; // Index of the task being edited

// Function to add or update a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        if (isEditing) {
            // Update the existing task
            tasks[editingTaskIndex].text = taskText;
            isEditing = false;
            editingTaskIndex = null;
            addTaskBtn.textContent = 'Add Task'; // Reset button text to "Add Task"
        } else {
            // Create a new task object and add to the array
            const task = { text: taskText };
            tasks.push(task);
        }

        taskInput.value = ''; // Clear the input field
        renderTaskList(); // Refresh the task list display
    }
}

// Function to render the task list
function renderTaskList() {
    taskList.innerHTML = ''; // Clear the current task list

    tasks.forEach((task, index) => {
        // Create a new task item
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        // Create the task text element
        const taskContent = document.createElement('span');
        taskContent.textContent = task.text;

        // Create the "Edit" button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';

        // Attach an event listener to the "Edit" button
        editBtn.addEventListener('click', function() {
            populateFormForEdit(index);
        });

        // Create the "Delete" button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Attach an event listener to the "Delete" button
        deleteBtn.addEventListener('click', function() {
            tasks.splice(index, 1); // Remove the task from the array
            renderTaskList(); // Refresh the task list display
        });

        // Append the task content, edit button, and delete button to the task item
        listItem.appendChild(taskContent);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

        // Append the task item to the task list
        taskList.appendChild(listItem);
    });
}

// Function to populate the form for editing a task
function populateFormForEdit(index) {
    taskInput.value = tasks[index].text; // Load the task's text into the input field
    isEditing = true; // Set the editing mode to true
    editingTaskIndex = index; // Store the index of the task being edited
    addTaskBtn.textContent = 'Update Task'; // Change button text to "Update Task"
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add or update a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Initial render of the task list
renderTaskList();
