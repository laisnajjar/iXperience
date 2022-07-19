import React, { useState } from 'react';
import TaskTable from './components/TaskTable';
import TaskInput from './components/TaskInput';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {

  const [tasks, setTasks] = useState([]);

  function onTaskCreated(task){
    const newTasks = [];
    for(let t of tasks){
      newTasks.push(t);
    }
    newTasks.push(task);
    setTasks(newTasks);
  }

  function onTaskUpdated(task){
    const updatedTasks = tasks.map((t) => {
      if(t.id === task.id){
        return task;
      }
      else{
        return t;
      }
    });

    setTasks(updatedTasks);
  }

  function onTaskRemove(task){
    const filteredTasks = tasks.filter((t) => {
      return t.id !== task.id;
    });
    setTasks(filteredTasks);
  }

  return (
    <div className='container mt-4'>
      <div className='card card-body text-center'>
        <h1>Task List</h1>
        <hr></hr>
        <div>Our Simple Task List</div>

        <TaskInput onTaskCreated = {onTaskCreated}></TaskInput>
        <TaskTable tasks={tasks} onTaskUpdated={onTaskUpdated} onTaskRemove={onTaskRemove}></TaskTable>

      </div>
    </div>
  )
}
