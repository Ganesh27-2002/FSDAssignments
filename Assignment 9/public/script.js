const API_URL = 'http://localhost:3000/todos';

// Fetch and display all to-dos
async function fetchTodos() {
  const response = await fetch(API_URL);
  const todos = await response.json();

  const todosContainer = document.getElementById('todos-container');
  todosContainer.innerHTML = '';

  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
      <div>
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>Due Date: ${new Date(todo.dueDate).toLocaleDateString()}</p>
        <p>Status: <strong>${todo.completed ? 'Completed' : 'Pending'}</strong></p>
      </div>
      <div class="todo-actions">
        <button class="mark-complete" onclick="markComplete('${todo._id}')">${todo.completed ? 'Undo' : 'Mark Complete'}</button>
        <button class="edit" onclick="showEditForm('${todo._id}', '${todo.title}', '${todo.description}', '${todo.dueDate}')">Edit</button>
        <button class="delete" onclick="deleteTodo('${todo._id}')">Delete</button>
      </div>
    `;
    todosContainer.appendChild(todoItem);
  });
}

// Add a new to-do
async function addTodo(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, dueDate })
  });

  if (response.ok) {
    document.getElementById('todo-form').reset();
    fetchTodos();
  } else {
    alert('Failed to add to-do');
  }
}

// Delete a to-do
async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (response.ok) {
    fetchTodos();
  } else {
    alert('Failed to delete to-do');
  }
}

// Mark a to-do as complete or undo
async function markComplete(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const todo = await response.json();

  const updatedTodo = { ...todo, completed: !todo.completed };
  const updateResponse = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTodo)
  });

  if (updateResponse.ok) {
    fetchTodos();
  } else {
    alert('Failed to update to-do status');
  }
}

// Show edit form
function showEditForm(id, currentTitle, currentDescription, currentDueDate) {
  const todosContainer = document.getElementById('todos-container');
  const editForm = document.createElement('div');
  editForm.classList.add('todo-item');
  editForm.innerHTML = `
    <form id="edit-form">
      <input type="text" id="edit-title" value="${currentTitle}" required>
      <input type="text" id="edit-description" value="${currentDescription}" required>
      <input type="date" id="edit-due-date" value="${currentDueDate.substring(0, 10)}" required>
      <button type="submit">Save Changes</button>
      <button type="button" onclick="fetchTodos()">Cancel</button>
    </form>
  `;
  todosContainer.innerHTML = '';
  todosContainer.appendChild(editForm);

  document.getElementById('edit-form').addEventListener('submit', (event) => {
    event.preventDefault();
    saveEdit(id);
  });
}

// Save edited to-do
async function saveEdit(id) {
  const title = document.getElementById('edit-title').value;
  const description = document.getElementById('edit-description').value;
  const dueDate = document.getElementById('edit-due-date').value;

  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, dueDate })
  });

  if (response.ok) {
    fetchTodos();
  } else {
    alert('Failed to update to-do');
  }
}

// Event listener for form submission
document.getElementById('todo-form').addEventListener('submit', addTodo);

// Initial fetch of to-dos
fetchTodos();
