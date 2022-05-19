import React, {useState} from "react";
import Taskform from "../components/Taskform";
import TaskEditPage from "./TaskEditPage";

const TaskPage = (props) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    

    const { addTask, isEditing, tasks, setCurrentTask, currentTask, handleEditSubmit } = props;

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addTask(taskName, taskDescription, taskDate)
        setTaskName('')
        setTaskDescription('')
        setTaskDate('')
    }

    

    return <>

    {isEditing === true ? <TaskEditPage tasks={tasks} setCurrentTask={setCurrentTask} currentTask={currentTask} handleEditSubmit={handleEditSubmit}/> :
    
    <Taskform 
    taskName={taskName}
    setTaskName={setTaskName}
    taskDate={taskDate}
    setTaskDate={setTaskDate}
    taskDescription={taskDescription}
    setTaskDescription={setTaskDescription}
    onSubmitHandler={onSubmitHandler}/>

}

    </>
}

export default TaskPage;