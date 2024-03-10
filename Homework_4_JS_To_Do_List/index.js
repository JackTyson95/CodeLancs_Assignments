// document.addEventListener('DOMContentLoaded', function() {
//     const taskInputs = document.querySelectorAll('input[type="text"]');
//     const todoLists = document.querySelectorAll('.todo-list');

//     taskInputs.forEach(function(input, index) {
//         input.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter') {
//                 const taskText = input.value.trim();
//                 if (taskText !== '') {
//                     const todoItem = document.createElement('div');
//                     todoItem.classList.add('todo-item', 'flex', 'items-center', 'bg-white', 'rounded-md', 'p-4');
//                     const checkbox = document.createElement('input');
//                     checkbox.type = 'checkbox';
//                     checkbox.classList.add('mr-4');
//                     const label = document.createElement('label');
//                     label.textContent = taskText;

//                     checkbox.addEventListener('change', function() {
//                         if (checkbox.checked) {
//                             label.style.textDecoration = 'line-through';
//                         } else {
//                             label.style.textDecoration = 'none';
//                         }
//                     });

//                     todoItem.appendChild(checkbox);
//                     todoItem.appendChild(label);
//                     todoLists[index].querySelector('.space-y-2').appendChild(todoItem);
//                     input.value = '';
//                 }
//             }
//         });
//     });

//     const listTitles = document.querySelectorAll('.todo-list h1[contenteditable="true"]');
//     listTitles.forEach(function(title) {
//         title.addEventListener('blur', function() {
//             if (title.textContent.trim() === '') {
//                 title.textContent = 'Untitled';
//             }
//         });
//     });
// });

import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [title, setTitle] = useState('Untitled');

  const addTask = e => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = i => {
    setTasks(prevTasks =>
      prevTasks.map((task, index) => 
        index === i ? {...task, completed: !task.completed} : task));
  };

  const updateTitle = e => {
    setTitle(e.target.value.trim() !== '' ? e.target.value : 'Untitled');
  };

  return (
    <div className='todo-list'>
      <h1 contentEditable suppressContentEditableWarning onBlur={updateTitle}>
        {title}
      </h1>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        onKeyPress={addTask}
      />
      <div className="space-y-2">
        {tasks.map((task, i) => (
          <div 
            className={'todo-item flex items-center bg-white rounded-md p-4'} 
            key={i}
          >
            <input
              type="checkbox"
              className="mr-4"
              checked={task.completed}
              onChange={() => toggleTask(i)}
            />
            <label style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
              {task.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;


