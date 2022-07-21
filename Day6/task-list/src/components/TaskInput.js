import React, { useState } from 'react'
import { Task } from '../models/task';

export default function TaskInput(props) {
  const [taskName, setTaskName] = useState('')

  function onFormSubmitted(event) {
    event.preventDefault();

    //create new task
    const task = new Task(
      null,
      taskName,
      false,
    );

    props.onTaskCreated(task);

    setTaskName(''); //function to change taskName
  }
  return (
    <div>
      {/* use form to be able to use 'enter' to submit */}
      <form onSubmit={onFormSubmitted}>
        <div className="input-group mb-3 mt-4">
          <input
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            type="text"
            class="form-control"
            placeholder="Enter task here"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
          >
            +
          </button>
        </div>
      </form>
    </div>
  )
}
