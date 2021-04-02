import React, { useState } from 'react';

const AddTaskBar = ({ addTask }) => {
    const [task, setTask] = useState('');

    const onInputClick = task => {
        addTask(task)
        setTask('');
    }

    return (
        <form onSubmit={e => e.preventDefault()} className="ui form">
            <div className="field">
                <label>Hey! What u wanna list ?</label>
                <div className="ui left icon action input">
                    <input
                        id="taskInput"
                        type="text"
                        value={task}
                        onChange={e => setTask( e.target.value )}
                    />
                    <div onClick={() => onInputClick(task)} className="ui green submit button">Add task</div>
                </div>
            </div>
        </form>
    );   
}

export default AddTaskBar;