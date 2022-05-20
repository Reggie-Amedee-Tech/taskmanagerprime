import React, {useEffect} from "react";
import Tasklist from "../components/Tasklist";
import uuid from "react-uuid";
import { useNavigate } from "react-router";

const TasklistPage = (props) => {

    const { tasks, handleEditClick, currentTask, deleteTask }  = props;
    const navigate = useNavigate()
    
const logID = (id) => {
    console.log(id)
}

    return <>
        {tasks.map((item) => {

            return <div key={uuid()}>
                <div>
                    <Tasklist item={item}/>
                    <button onClick={() => {handleEditClick(item)}}>Edit Task</button>
                    <button onClick={() => {deleteTask(item.id)}}>Delete Task</button>
                </div>
                <button onClick={() => {navigate(-1)}}>Go Back</button>
            </div>
        })}
    </>
}

export default TasklistPage;