// Initial setup with some todos
document.addEventListener('DOMContentLoaded', function() {
  const backlogList = document.getElementById('backlog-list');
  backlogList.innerHTML = `
      <li>Completing React Assignment</li>
      <li>Weekend Movie Plan</li>
  `;
});

function moveToNext(currentListId, nextListId) {
  const currentList = document.getElementById(currentListId);
  const nextList = document.getElementById(nextListId);

  if (currentList.children.length > 0) {
      const todoItem = currentList.children[0];
      nextList.appendChild(todoItem);
  }
}

function moveToPrev(currentListId, prevListId) {
  const currentList = document.getElementById(currentListId);
  const prevList = document.getElementById(prevListId);

  if (currentList.children.length > 0) {
      const todoItem = currentList.children[0];
      prevList.appendChild(todoItem);
  }
}

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
      alert("Please enter a task!");
      return;
  }

  const todoList = document.getElementById('todo-list');
  const newTask = document.createElement('li');
  newTask.textContent = taskText;
  todoList.appendChild(newTask);

  taskInput.value = "";
}