import React, {useState} from "react";
import Taskform from "../components/Taskform";

const TaskPage = (props) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');

    const { addTask } = props;

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addTask(taskName, taskDescription, taskDate)
        setTaskName('')
        setTaskDescription('')
        setTaskDate('')
    }



    return <>
    <Taskform 
    taskName={taskName}
    setTaskName={setTaskName}
    taskDate={taskDate}
    setTaskDate={setTaskDate}
    taskDescription={taskDescription}
    setTaskDescription={setTaskDescription}
    onSubmitHandler={onSubmitHandler}/>
    </>
}

export default TaskPage;