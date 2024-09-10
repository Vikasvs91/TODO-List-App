import React from 'react';

const TaskList = ({ tasks, completeTask, deleteTask }) => (
  <ul>
    {tasks.map((task, index) => (
      <li key={task._id}>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name} - {task.description}
        </span>
        <button onClick={() => completeTask(index)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
