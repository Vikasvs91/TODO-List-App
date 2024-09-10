// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { name, description };
    await addTask(task);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
        required
      /><br/>
      <textarea
        type="address"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        rows="5"
        cols="50"
        required
      ></textarea><br/>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
