// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load All Event Listeners
loadEventListeners();

function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear all tasks event
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }else{
    // Create li element
    const li = document.createElement('li');
    // Add class to li
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class to a link
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  }

  e.preventDefault();
}

// Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear all tasks
function clearTasks(){
  if(confirm('Delete all items?')){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }
  }
}

// Filter tasks
function filterTasks(e){
  const entry = e.target.value.toLowerCase();
  let items = document.querySelectorAll('.collection-item'); // NodeList
  items.forEach(function(item){
    if(item.firstChild.textContent.toLowerCase().indexOf(entry) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  });
}