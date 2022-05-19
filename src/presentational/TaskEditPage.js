import React, { useState } from 'react';
import TaskEdit from '../components/TaskEdit';

const TaskEditPage = (props) => {
    const [taskNameEdit, setTaskNameEdit] = useState('');
    const [taskDescriptionEdit, setTaskDescriptionEdit] = useState('');
    const [taskDateEdit, setTaskDateEdit] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [taskObject, setTaskObject] = useState({});

    const { tasks, currentTask, setCurrentTask, handleEditSubmit } = props;



    const handleEditClick = (task) => {
        setIsEditing(true)
        
    }

    const handleTaskNameChange = (e) => {
        setCurrentTask({...currentTask, 
        taskName: e.target.value})
    }

    const handleTaskDescriptionChange = (e) => {
        setCurrentTask({...currentTask, 
        taskDescription: e.target.value})
    }

    const handleTaskDateChange = (e) => {
        setCurrentTask({...currentTask, 
        taskDate: e.target.value})
    }

    


    return <>

    <TaskEdit
    taskNameEdit={taskNameEdit}
    setTaskNameEdit={setTaskNameEdit}
    taskDescriptionEdit={setTaskDescriptionEdit}
    setTaskDescriptionEdit={setTaskDescriptionEdit}
    taskDateEdit={taskDateEdit}
    setTaskDateEdit={setTaskDateEdit}
    tasks={tasks}
    handleEditClick={handleEditClick}
    currentTask={currentTask}
    setCurrentTask={setCurrentTask}
    handleTaskNameChange={handleTaskNameChange}
    handleTaskDescriptionChange={handleTaskDescriptionChange}
    handleTaskDateChange={handleTaskDateChange}
    handleEditSubmit={handleEditSubmit}/>
    </>
}

export default TaskEditPage;