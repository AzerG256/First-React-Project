import React from 'react';
import { useState } from 'react';
import "./newTask.css"
function NewTask({ onAddTask }) {
    const [task, setTask] = useState({ name: '', description: '' ,date:''});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.name.trim() === '') {
            alert('Task name cannot be empty!');
            return;
        }
        onAddTask(task);
        setTask({ name: '', description: '' ,date:''});
    };
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Enter the name of your task"
                    name="name"
                    value={task.name}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    placeholder="Enter the description of your task"
                    name="description"
                    value={task.description}
                    onChange={handleInput}
                />
                <input
                    type="date"
                    placeholder="Enter the deadline of your task"
                    name="date"
                    value={task.description}
                    onChange={handleInput}
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
}

export default NewTask;