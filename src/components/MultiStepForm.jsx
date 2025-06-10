import React, { useState } from 'react';

// MultiStepForm component to handle adding tasks in a multi-step process
const MultiStepForm = ({ onAddTask }) => {
    // State to manage the current step, task name, priority, and error messages
    const [step, setStep] = useState(1);
    // State to manage task name and priority selection
    const [taskName, setTaskName] = useState('');
    // Default priority set to 'Medium'
    const [priority, setPriority] = useState('Medium');
    // State to manage error messages
    const [error, setError] = useState('');

    // Function to handle moving to the next step
    const handleNext = () => {
        if (step === 1 && taskName.trim() === '') {
            setError('Task name cannot be empty');
        } else {
            setError('');
            setStep(step + 1);
        }
    };
    // Function to handle going back to the previous step

    const handleBack = () => {
        setStep(step - 1);
    };

    // Function to handle form submission for adding a task
    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() === '') {
            setError('Task name cannot be empty');
            return;
        }
        onAddTask({ id: Date.now(), name: taskName, priority });
        setTaskName('');
        setPriority('Medium');
        setStep(1);
    };
// Render the multi-step form with input fields for task name and priority, and navigation buttons
    return (
        <div>
            {/* // Displaying the current step title */}
            <h2>{step === 1 ? 'Step 1: Enter Task Name' : 'Step 2: Select Priority'}</h2>
            {/* // Form to handle task name and priority selection */}
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            placeholder="Task Name"
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="button" onClick={handleNext}>Next</button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <label>
                            Priority:
                            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </label>
                        <button type="button" onClick={handleBack}>Back</button>
                        <button type="submit">Add Task</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default MultiStepForm;
