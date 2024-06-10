import React, { useState } from 'react';
import '../Home/Home.css';
import Task from '../Task/Task';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (title.trim() && description.trim()) {
            setTasks([...tasks, { title, description }]);
            setTitle('');
            setDescription('');
        } else {
            alert(" Please Enter Both title and description  🙏.");
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
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
                ></textarea>
                <button type="submit">Submit</button>
            </form>
            {tasks.length === 0 ? (
                <h2>No tasks to show 😊 </h2>
            ) : (
                tasks.map((item, index) => (
                    <Task
                        key={index}
                        title={item.title}
                        description={item.description}
                        deleteTask={() => deleteTask(index)}
                    />
                ))
            )}
        </div>
    );
};

export default Home;
