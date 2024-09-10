import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const response = await axios.post('http://localhost:5000/tasks', task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const completeTask = async (index) => {
    try {
      const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
      await axios.put(`http://localhost:5000/tasks/${tasks[index]._id}`, updatedTask);
      setTasks(tasks.map((task, i) => (i === index ? updatedTask : task)));
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const deleteTask = async (index) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${tasks[index]._id}`);
      setTasks(tasks.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
