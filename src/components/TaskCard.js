import React from 'react';

const TaskCard = ({ task, deleteTask }) => {
    const onDoneClick = task => {
        deleteTask(task)
    }

    return (
        <div className="item">
            <div className="right floated content">
                <div onClick={() => onDoneClick(task)} className="ui red submit button">Done</div>
            </div>
            <div className="content">
                <div>{task.text}</div>
            </div>
        </div>
    );
}

export default TaskCard;