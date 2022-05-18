import React from 'react'
import classes from './Taskform.module.css'


const Taskform = (props) => {

    const {
        taskName,
        setTaskName,
        taskDescription,
        setTaskDescription,
        taskDate,
        setTaskDate,
        onSubmitHandler
    } = props;

    return <>
        <form onSubmit={onSubmitHandler}>
            <div className={classes.Div}>

            
            <label>Task Name:</label>
            <input
                type='text'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Please input a task name!">
            </input>
            <label>Task Description:</label>
            <input
                type='text'
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Please input a task description">
            </input>
            <label>Task Date:</label>
            <input
                type='date'
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                placeholder="Please input a task name!">
            </input>
            <button type='submit' >Submit Task</button>
            </div>

        </form>

    </>
}

export default Taskform;