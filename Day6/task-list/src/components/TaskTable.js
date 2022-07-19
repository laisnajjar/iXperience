import React from 'react'

export default function TaskTable(props) {
 
  function toggleTaskComplete(task) {
    task.complete = !task.complete;
    props.onTaskUpdated(task);
  }

  function onTaskRemove(task){
    props.onTaskRemove(task);
  }
  
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Complete</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.complete ? 'complete' : 'not complete'}</td>
              <td>
                <button onClick={(e) => toggleTaskComplete(task)} className="btn btn-primary btn-sm ms-2">
                  Toggle Complete
                </button>
                <button onClick= {(e) => onTaskRemove(task)} className="btn btn-primary btn-sm ms-2">
                  Remove Task
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
