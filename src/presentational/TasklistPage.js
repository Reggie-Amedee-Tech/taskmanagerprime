import React, {useEffect} from "react";
import Tasklist from "../components/Tasklist";
import uuid from "react-uuid";

const TasklistPage = (props) => {

    const { tasks, handleEditClick, currentTask, deleteTask }  = props;


    
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
            </div>
        })}
    </>
}

export default TasklistPage;