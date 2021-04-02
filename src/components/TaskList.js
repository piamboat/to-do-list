import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, deleteTask }) => {
    const listOfTasks = tasks.map(task => {
        return <TaskCard key={task.id} task={task} deleteTask={deleteTask} />;
    });

    return (
        <div className="ui relaxed divided animated list">
            {listOfTasks}
        </div>
    );
}

export default TaskList;