import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available. Please add a task.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span>{task.name} - {task.priority}</span>
                            <button onClick={() => onEdit(task)}>Edit</button>
                            <button onClick={() => onDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
