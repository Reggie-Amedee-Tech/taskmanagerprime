import './App.css';
import React, {useState} from 'react'
import TaskPage from './presentational/TaskPage';
import TasklistPage from './presentational/TasklistPage';
import TaskEditPage from './presentational/TaskEditPage';
import uuid from 'react-uuid';



function App() {

  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState({})
  

  const addTask = (taskName, taskDescription, taskDate) => {
    setTasks([...tasks,
    {
      taskName: taskName,
      taskDescription: taskDescription,
      taskDate: taskDate,
      id: uuid()
      
    }])

    
  }

  const editTask = (id, updatedTask) => {
    const updatedItem = tasks.map((task) => {
      return task.id === id ? updatedTask : task
    })
    setTasks(updatedItem)
    setIsEditing(false)
    console.log(id)
    console.log(updatedItem)
  }

  const handleEditClick = (task) => {
    setIsEditing(true)
    setCurrentTask({...task})
    
    
  }
  
  const handleEditSubmit = (event) => {
    event.preventDefault()
    editTask(currentTask.id, currentTask)
  }


  const deleteTask = (id) => {
    const newTasks = tasks.filter((item) => {
        return item.id !== id
    })
    setTasks(newTasks)
}
  

  return (
    <div className="App">
      <TaskPage tasks={tasks} addTask={addTask} isEditing={isEditing} setCurrentTask={setCurrentTask} currentTask={currentTask} handleEditSubmit={handleEditSubmit}/>
      <TasklistPage tasks={tasks} handleEditClick={handleEditClick} currentTask={currentTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
