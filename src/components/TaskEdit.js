import React from "react";
import classes from './TaskEdit.Module.css'

const TaskEdit = (props) => {

    const {
        taskNameEdit,
        setTaskNameEdit,
        taskDescriptionEdit,
        setTaskDescriptionEdit,
        taskDateEdit,
        setTaskDateEdit,
        handleEditClick,
        tasks,
        setCurrentTask,
        currentTask,
        handleTaskNameChange,
        handleTaskDescriptionChange,
        handleTaskDateChange,
        handleEditSubmit
    } = props;


    return <>
        
            <form onSubmit={handleEditSubmit}>
            <div className={classes.Div}>
                <label>Edit Task Name</label>
                <input
                    type="text"
                    value={currentTask.taskName}
                    onChange={handleTaskNameChange}
                    >
                        
                    </input>
                <label>Edit Task Description</label>
                <input
                    type="text"
                    value={currentTask.taskDescription}
                    onChange={handleTaskDescriptionChange}>

                    </input>
                <label>Edit Task Date</label>
                <input
                    type="text"
                    value={currentTask.taskDate}
                    onChange={handleTaskDateChange}>

                    </input>
                    </div>
                    <button type="submit">Edit Task</button>
            </form>
            
        

    </>
}

export default TaskEdit