// Wait for the page to load
document.addEventListener('DOMContentLoaded', function () {
    // Get references to input, button, and task list
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text from the input
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item (li) for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a "Complete" button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-btn';
        taskItem.appendChild(completeButton);

        // Create a "Delete" button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        taskItem.appendChild(deleteButton);

        // Add the new task to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';

        // Add event listener for the "Complete" button
        completeButton.addEventListener('click', function () {
            taskItem.classList.toggle('completed'); // Toggle a "completed" style
        });

        // Add event listener for the "Delete" button
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(taskItem); // Remove the task
        });
    }

    // Add an event listener to the "Add Task" button
    addTaskButton.addEventListener('click', addTask);

    // Optional: Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
