// Function to switch between pages
function showPage(pageId) {
    // Hide all sections
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected section
    document.getElementById(pageId).classList.add('active');
}

// Function to add a task
function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const count = document.getElementById('task-count');

    if (input.value === '') return;

    // Create list item
    const li = document.createElement('li');
    li.textContent = input.value;
    taskList.appendChild(li);

    // Update Dashboard Count
    count.textContent = parseInt(count.textContent) + 1;

    // Clear input
    input.value = '';
}
