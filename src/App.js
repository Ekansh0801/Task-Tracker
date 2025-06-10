import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [searchTerm, setSearchTerm] = useState('');
    const [editTaskData, setEditTaskData] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        setEditTaskData(null);
    };

    const deleteTask = (taskId) => {
        const filteredTasks = tasks.filter(task => task.id !== taskId);
        setTasks(filteredTasks);
    };

    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <h1>Task Tracker</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editTaskData={editTaskData}
            />
            <TaskList
                tasks={filteredTasks}
                onEdit={setEditTaskData}
                onDelete={deleteTask}
            />
        </div>
    );
};

export default App;