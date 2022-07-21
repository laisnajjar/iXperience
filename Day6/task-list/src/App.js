import React, { useState, useEffect } from 'react'
import TaskTable from './components/TaskTable'
import TaskInput from './components/TaskInput'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import taskService from './services/task.service'

export default function App() {
  useEffect(() => {
    fetchTasks()
  }, [])

  const [tasks, setTasks] = useState([])

  async function fetchTasks() {
    try {
      const tasks = await taskService.readTasks()
      setTasks(tasks)
    } catch (err) {
      console.log(err)
    }
  }

  async function onTaskCreated(task) {
    try {
      task = await taskService.createTask(task)

      const newTasks = []
      for (let t of tasks) {
        newTasks.push(t)
      }
      newTasks.push(task)
      setTasks(newTasks)
    } catch (err) {
      console.log(err)
    }
  }

  async function onTaskUpdated(task) {
    try {
      await taskService.updateTask(task)
      const updatedTasks = tasks.map((t) => {
        if (t.id === task.id) {
          return task
        } else {
          return t
        }
      })

      setTasks(updatedTasks)
    } catch (err) {
      console.log(err)
    }
  }

  async function onTaskRemove(task) {
    try {
      await taskService.deleteTask(task)
      const filteredTasks = tasks.filter((t) => {
        return t.id !== task.id
      })
      setTasks(filteredTasks)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container mt-4">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <div>Our Simple Task List</div>

        <TaskInput onTaskCreated={onTaskCreated}></TaskInput>
        <TaskTable
          tasks={tasks}
          onTaskUpdated={onTaskUpdated}
          onTaskRemove={onTaskRemove}
        ></TaskTable>
      </div>
    </div>
  )
}
