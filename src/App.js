import './App.css';
import React, { useState } from 'react'
import { AuthProvider } from './components/Auth';
import { RequireAuth } from './components/RequireAuth';
import TaskPage from './presentational/TaskPage';
import TasklistPage from './presentational/TasklistPage';
import NoMatchPage from './presentational/NoMatchPage';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './presentational/Navbar';
import uuid from 'react-uuid';
import HomePage from './presentational/HomePage';
import LoginPage from './presentational/LoginPage';



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

    navigate('alltasks')

  }

  const editTask = (id, updatedTask) => {
    const updatedItem = tasks.map((task) => {
      return task.id === id ? updatedTask : task
    })
    setTasks(updatedItem)
    setIsEditing(false)
    
  }

  const handleEditClick = (task) => {
    setIsEditing(true)
    setCurrentTask({ ...task })
    navigate('create')

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
      <AuthProvider>
      <nav>
        <Navbar />
      </nav>
    <section>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<HomePage />}/>

        <Route path="/create" element={<RequireAuth>
          <TaskPage tasks={tasks} addTask={addTask} isEditing={isEditing} setCurrentTask={setCurrentTask} currentTask={currentTask} handleEditSubmit={handleEditSubmit} />
        </RequireAuth>}></Route>
        <Route path="alltasks" element={<RequireAuth>
          <TasklistPage tasks={tasks} handleEditClick={handleEditClick} currentTask={currentTask} deleteTask={deleteTask} />
        </RequireAuth>} />
        <Route path="*" element={<NoMatchPage />}></Route>
      </Routes>
      </section>
      </AuthProvider>
    </div>
  );
}

export default App;
