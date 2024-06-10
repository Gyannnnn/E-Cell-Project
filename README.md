# Task Management Application

This Task Management Application is a simple and efficient tool for managing daily tasks. Built with React, it provides a seamless experience for creating, viewing, and deleting tasks without the need for a backend. The application runs entirely on the client side, making it easy to use and deploy.

## Features

1. **Add Tasks**:
   - Users can add new tasks by entering a task title and description.
   - The application ensures that both fields are filled out, preventing the submission of empty tasks.

2. **View Tasks**:
   - All added tasks are displayed in a list format, showing the task title and description.
   - Users can quickly see all their tasks in one place, making it easier to stay organized.

3. **Delete Tasks**:
   - Each task has a delete button, allowing users to remove tasks they have completed or no longer need.
   - This feature helps keep the task list clean and up to date.

4. **Responsive Design**:
   - The application features a responsive design, ensuring a smooth user experience across various devices and screen sizes.

## Technical Stack

- **Frontend**: React.js
  - React is used for building the user interface, providing a dynamic and responsive user experience.
  - State management with React's `useState` hook ensures real-time updates to the task list.

- **Styling**: CSS
  - The application is styled using CSS, ensuring a clean and modern look.
  - Additional icons from the `react-icons` library enhance the user interface, providing intuitive delete buttons.

## How It Works

1. **Add Task**:
   - Users enter a task title and description in the input fields and click the "Submit" button.
   - The task is added to the list and displayed on the screen.

2. **Delete Task**:
   - Users can delete a task by clicking the delete icon next to the task.
   - The task is removed from the list, and the display is updated in real-time.

## Usage

- **Add New Task**: Type the task title and description, then click "Submit".
- **View Tasks**: See all added tasks displayed in a list format.
- **Delete Task**: Click the delete icon next to a task to remove it from the list.

This application provides a straightforward and effective solution for managing tasks, helping users stay organized and productive.

## Code Overview

### Home Component

```javascript
import React, { useState } from 'react';
import '../Home/Home.css';
import Task from '../Task/Task';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (title && description) {
            setTasks([...tasks, { title, description }]);
            setTitle('');
            setDescription('');
        } else {
            alert('Both fields are required.');
        }
    };

    return (
        <div id="container">
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter Your Task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Describe Your Task"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {tasks.map((item, index) => (
                <Task
                    key={index}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default Home;
