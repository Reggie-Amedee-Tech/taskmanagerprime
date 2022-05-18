import './App.css';
import React, {useState} from 'react'
import TaskPage from './presentational/TaskPage';
import TasklistPage from './presentational/TasklistPage';
function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (taskName, taskDescription, taskDate) => {
    setTasks([...tasks,
    {
      taskName: taskName,
      taskDescription: taskDescription,
      taskDate: taskDate 
    }])
  }

  return (
    <div className="App">
      <TaskPage tasks={tasks} addTask={addTask}/>
      <TasklistPage tasks={tasks}/>
    </div>
  );
}

export default App;
