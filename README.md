# To-Do List App
A mobile application built using React Native and Firebase, featuring user authentication, to-do list management, and profile editing capabilities.
A simple full-stack To-Do List application that allows users to add, delete, and mark tasks as complete. This project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Table of Contents

- Features
- Technologies Used
- Installation
- Usage
- API Endpoints
- Project Structure
- Future Enhancements

## Features

- Add new tasks with a name and description.
- Mark tasks as complete or incomplete.
- Delete tasks from the list.
- Store tasks in a MongoDB database.
- Simple and user-friendly interface built using React.

## Technologies Used

- Frontend: React.js, Axios
- Backend: Express.js, Node.js
- Database: MongoDB
- Other Tools: Axios for HTTP requests, Mongoose for interacting with MongoDB

## Installation

To run this project locally, follow these steps:

### Backend Setup

1. Clone the repository:
2. Navigate to the backend directory:
3. Install dependencies:
4. Set up MongoDB:
Create a `.env` file in the `backend` directory and add your MongoDB connection string:
5. Start the backend server:

### Frontend Setup

1. Navigate to the frontend directory:
2. Install dependencies:
3. Start the React development server:

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Add a task by entering the task name and description.
3. View the list of tasks, mark them complete, or delete them.

## API Endpoints

- **GET /tasks**: Fetches all tasks.
- **POST /tasks**: Adds a new task.
- **DELETE /tasks/:id**: Deletes a specific task by its ID.

## Project Structure


## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Add a task by entering the task name and description.
3. View the list of tasks, mark them complete, or delete them.

## API Endpoints

- **GET /tasks**: Fetches all tasks.
- **POST /tasks**: Adds a new task.
- **DELETE /tasks/:id**: Deletes a specific task by its ID.

## Project Structure

git add README.md
git commit -m "Add README file"
git push origin main
