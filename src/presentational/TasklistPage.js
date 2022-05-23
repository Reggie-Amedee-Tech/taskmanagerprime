import React, {useEffect} from "react";
import Tasklist from "../components/Tasklist";
import uuid from "react-uuid";
import { useNavigate } from "react-router";
import classes from './TasklistPage.module.css'

const TasklistPage = (props) => {

    const { tasks, handleEditClick, currentTask, deleteTask }  = props;
    const navigate = useNavigate()
    
const logID = (id) => {
    console.log(id)
}

    return <>
        {tasks.map((item) => {

            return <div key={uuid()}>
                <div className={classes.taskListContainer}>
                    <Tasklist item={item} handleEditClick={handleEditClick} deleteTask={deleteTask}/>
                    <div className={classes.buttons}>
                    <button onClick={() => {handleEditClick(item)}} className={classes.button}>Edit Task</button>
                    <button onClick={() => {deleteTask(item.id)}} className={classes.button}>Delete Task</button>
                    <button onClick={() => {navigate(-1)}} className={classes.button}>Go Back</button>
                    </div>
                </div>
                
            </div>
        })}
    </>
}

export default TasklistPage;