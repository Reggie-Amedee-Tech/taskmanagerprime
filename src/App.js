import './App.css';
import React, { useState } from 'react'
import TaskPage from './presentational/TaskPage';
import TasklistPage from './presentational/TasklistPage';
import NoMatchPage from './presentational/NoMatchPage';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './presentational/Navbar';
import uuid from 'react-uuid';



function App() {

  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState({})

  const navigate = useNavigate();

  const addTask = (taskName, taskDescription, taskDate) => {
    setTasks([...tasks,
    {
      taskName: taskName,
      taskDescription: taskDescription,
      taskDate: taskDate,
      id: uuid()

    }])

    navigate('/alltasks')

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
    setCurrentTask({ ...task })
    navigate('/')

  }

  const handleEditSubmit = (event) => {
    event.preventDefault()
    editTask(currentTask.id, currentTask)
    navigate('alltasks')
  }


  const deleteTask = (id) => {
    const newTasks = tasks.filter((item) => {
      return item.id !== id
    })
    setTasks(newTasks)
  }


  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
    <section>
      <Routes>
        <Route path="/" element={<TaskPage tasks={tasks} addTask={addTask} isEditing={isEditing} setCurrentTask={setCurrentTask} currentTask={currentTask} handleEditSubmit={handleEditSubmit} />}></Route>
        <Route path="alltasks" element={<TasklistPage tasks={tasks} handleEditClick={handleEditClick} currentTask={currentTask} deleteTask={deleteTask} />} />
        <Route path="*" element={<NoMatchPage />}></Route>
      </Routes>
      </section>
    </div>
  );
}

export default App;
