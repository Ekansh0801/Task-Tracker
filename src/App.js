// importing components and hooks
import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import useLocalStorage from './hooks/useLocalStorage';

// Main App component

const App = () => {
    // Using custom hook to manage tasks in local storage and state for search term and edit task data
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    // State to manage search term and task being edited
    const [searchTerm, setSearchTerm] = useState('');
    //  State to manage the task being edited
    const [editTaskData, setEditTaskData] = useState(null);

    // Functions to add, update, and delete tasks
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    
    //  Function to update an existing task
    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        setEditTaskData(null);
    };
    
    // Function to delete a task
    const deleteTask = (taskId) => {
        const filteredTasks = tasks.filter(task => task.id !== taskId);
        setTasks(filteredTasks);
    };
    
    // Filtering tasks based on the search term
    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Rendering the main application structure
    return (
            // Main application container
        <div className="app">
            {/*  Header with title and search bar */}
            <h1>Task Tracker</h1>
            {/*  Search bar component for filtering tasks */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {/*  Task form for adding or editing tasks */}
            <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editTaskData={editTaskData}
            />
            {/*  Task list component to display tasks */}
            <TaskList
                tasks={filteredTasks}
                onEdit={setEditTaskData}
                onDelete={deleteTask}
            />
        </div>
    );
};

// Exporting the App component as default for use in other parts of the application

export default App;