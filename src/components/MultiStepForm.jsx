import React, { useState } from 'react';

const MultiStepForm = ({ onAddTask }) => {
    const [step, setStep] = useState(1);
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [error, setError] = useState('');

    const handleNext = () => {
        if (step === 1 && taskName.trim() === '') {
            setError('Task name cannot be empty');
        } else {
            setError('');
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        setStep(step - 1);
    };

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

    return (
        <div>
            <h2>{step === 1 ? 'Step 1: Enter Task Name' : 'Step 2: Select Priority'}</h2>
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
