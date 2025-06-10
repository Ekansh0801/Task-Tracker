import React, { useState, useEffect } from 'react';

// TaskForm component to handle adding and editing tasks
const TaskForm = ({ addTask, updateTask, editTaskData }) => {
    // State to manage task name, priority, and error messages
    const [taskName, setTaskName] = useState('');
    // Default priority set to 'Medium'
    const [priority, setPriority] = useState('Medium');
    // State to manage error messages
    const [error, setError] = useState('');
   
    // Effect to populate form fields when editing a task
    useEffect(() => {
        if (editTaskData) {
            setTaskName(editTaskData.name);
            setPriority(editTaskData.priority);
        }
    }, [editTaskData]);
  
    // Function to handle form submission for adding or updating tasks
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName.trim()) {
            setError('Task name cannot be empty');
            return;
        }

        if (editTaskData) {
            updateTask({ ...editTaskData, name: taskName, priority });
        } else {
            addTask({ id: Date.now(), name: taskName, priority });
        }

        setTaskName('');
        setPriority('Medium');
        setError('');
    };

    // Render the form with input fields for task name and priority, and a submit button
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="taskName">Task Name:</label>
                <input
                    type="text"
                    id="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div>
                {/* // Dropdown for selecting task priority */}
                <label htmlFor="priority">Priority:</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            {/* // Submit button to add or update the task */}
            <button type="submit">{editTaskData ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;

