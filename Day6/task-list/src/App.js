import React from 'react';
import TaskTable from './components/TaskTable';
import TaskInput from './components/TaskInput';
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {

  return (
    <div className='container mt-4'>
      <div className='card card-body text-center'>
        <h1>Task List</h1>
        <hr></hr>
        <div>Our Simple Task List</div>

        <div>
          <TaskTable></TaskTable>
          <TaskInput></TaskInput>
        </div>
      </div>
    </div>
  )
}
