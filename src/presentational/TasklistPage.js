import React from "react";
import Tasklist from "../components/Tasklist";

const TasklistPage = (props) => {

    const {tasks} = props;

    return <>
        {tasks.map((item, idx) => {
            return <Tasklist item={item} key={idx}/>
        })}
    
    </>
}

export default TasklistPage;