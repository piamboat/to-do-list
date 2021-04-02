import React, { useState } from 'react';
import AddTaskBar from './components/AddTaskBar';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            title: 'To do task'
        },
        {
            id: 2,
            title: 'Finished task'
        }
    ]

    const onTitleClick = index => {
        setActiveIndex(index);
    }

    const addTask = task => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, text: task };
        
        setTasks([ ...tasks, newTask ]);
    }

    const deleteTask = task => {
        setFinishedTasks([...finishedTasks, task])
        setTasks(tasks.filter(originTask => originTask.id !== task.id))
    }

    const deleteFinishedTask = task => {
        setFinishedTasks(finishedTasks.filter(finishedTask => finishedTask.id !== task.id))
    }

    const renderedItems = items.map( (item, index) => {
        const active = activeIndex === index ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    onClick={ () => onTitleClick(index) }
                >
                    <i className="dropdown icon"></i>
                    { item.title }
                </div>
                <div className={`content ${active}`}>
                    <div>
                        <TaskList
                            tasks={item.id === 1 ? tasks : finishedTasks}
                            deleteTask={item.id === 1 ? deleteTask : deleteFinishedTask}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui segment">
            <AddTaskBar addTask={addTask} />
            <div className="ui styled fluid accordion">
                { renderedItems }
            </div>
        </div>
    );
}

export default App;