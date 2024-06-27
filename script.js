document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('welcome-page').classList.add('hidden');
    document.getElementById('todo-page').classList.remove('hidden');
    document.getElementById('todo-page').classList.add('active');
});

document.getElementById('add-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');

        const textNode = document.createTextNode(todoText);
        listItem.appendChild(textNode);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});

