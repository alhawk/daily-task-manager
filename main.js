// Selectors
let taskInput = document.querySelector(".task-input")
let addTaskButton = document.querySelector(".add-task-button")
let taskList = document.querySelector(".task-list")

// Event Listeners
addTaskButton.addEventListener('click', addTask)
taskList.addEventListener('click', deleteCheck)



// Functions
function addTask(event) {
  event.preventDefault()
  if (taskInput.value.length !== 0) {
      // Create Div as a container of tasks
  let taskDiv = document.createElement('div')
  taskDiv.classList.add('task')

  // Add a task
  let newTask = document.createElement('li')
  newTask.innerText = taskInput.value
  newTask.classList.add('task-item')
  taskDiv.appendChild(newTask)

  // Add completed task button
  let completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class= "fas fa-check"></i>'
  completedButton.classList.add('complete-button')
  taskDiv.appendChild(completedButton)


  // Add delete task button
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<i class= "fas fa-trash"></i>'
  deleteButton.classList.add('delete-button')
  taskDiv.appendChild(deleteButton)

  // Add to list
  taskList.appendChild(taskDiv)

  // Reset Input
  taskInput.value = ''
  }

}

function deleteCheck (event) {
  let item = event.target
  if(item.classList[0] === 'delete-button') {
    let task = item.parentElement
    task.remove()
  }

  if(item.classList[0] === 'complete-button') {
    let task = item.parentElement
    task.classList.toggle('completed')
  }
}