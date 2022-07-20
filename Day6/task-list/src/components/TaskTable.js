import React from 'react'

export default function TaskTable(props) {
  function toggleTaskComplete(task) {
    task.complete = !task.complete
    props.onTaskUpdated(task)
  }

  function onTaskRemove(task) {
    props.onTaskRemove(task)
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
              <td>
                {task.complete ? 
                  <i classame="bi bi-circle-fill green"></i>
                 : 
                  <i classame="bi bi-circle green"></i>
                }
              </td>
              <td>
                <button
                  onClick={(e) => toggleTaskComplete(task)}
                  className="btn btn-primary btn-sm ms-2"
                  // {task.complete ?
                  //   <i className="bi bi-toggle-off"></i>
                  //   :
                  //   <i className="bi bi-toggle-on"></i>
                  // }
                ></button>
                <button
                  onClick={(e) => onTaskRemove(task)}
                  className="btn btn-primary btn-sm ms-2"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
