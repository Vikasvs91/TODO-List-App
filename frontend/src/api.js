import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api' // Check if this matches your backend URL
});

export const fetchTasks = async () => {
  try {
    const response = await api.get('/tasks'); // Ensure this matches your backend route
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
