// Retrieve DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function createTaskItem(task) {
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
  
    deleteButton.addEventListener('click', function (event) {
      event.stopPropagation(); // Stop event propagation
  
      // Remove the parent list item
      li.remove();
    });
  
    const upButton = document.createElement('button');
    upButton.textContent = 'Up';
    upButton.classList.add('move-button', 'up-button');
  
    const downButton = document.createElement('button');
    downButton.textContent = 'Down';
    downButton.classList.add('move-button', 'down-button');
  
    // Add event listeners to up and down buttons
    upButton.addEventListener('click', function () {
      moveTaskUp(li);
    });
  
    downButton.addEventListener('click', function () {
      moveTaskDown(li);
    });
  
    li.appendChild(taskText);
    li.appendChild(upButton);
    li.appendChild(downButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
  


// Event listener for form submission
taskForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const task = taskInput.value.trim(); // Get task value and remove leading/trailing spaces

  if (task !== '') {
    createTaskItem(task); // Create new task item
    taskInput.value = ''; // Clear task input field
  }
});


// Function to move task item up
function moveTaskUp(taskItem) {
    const previousSibling = taskItem.previousElementSibling;
    if (previousSibling) {
      taskList.insertBefore(taskItem, previousSibling);
    }
  }
  
  // Function to move task item down
function moveTaskDown(taskItem) {
    const nextSibling = taskItem.nextElementSibling;
    if (nextSibling) {
      taskList.insertBefore(taskItem, nextSibling.nextElementSibling);
    }
  }
  
  // Event listener for up button click
taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('up-button')) {
      const taskItem = e.target.closest('li');
      moveTaskUp(taskItem);
    }
  });
  
  // Event listener for down button click
  taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('down-button')) {
      const taskItem = e.target.closest('li');
      moveTaskDown(taskItem);
    }
  });



  