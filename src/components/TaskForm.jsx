import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, editTaskData }) => {
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [error, setError] = useState('');

    useEffect(() => {
        if (editTaskData) {
            setTaskName(editTaskData.name);
            setPriority(editTaskData.priority);
        }
    }, [editTaskData]);

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
            <button type="submit">{editTaskData ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;

