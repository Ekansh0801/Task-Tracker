import React from 'react';

// TaskList component to display a list of tasks with options to edit or delete each task
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
                                {/* // Displaying task name and priority, along with buttons to edit or delete the task */}
                            <span>{task.name} - {task.priority}</span>
                            {/* // Buttons to edit or delete the task */}
                            <button onClick={() => onEdit(task)}>Edit</button>
                            {/* // Button to delete the task */}
                            <button onClick={() => onDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
