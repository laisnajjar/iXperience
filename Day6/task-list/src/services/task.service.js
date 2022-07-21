import {
  collection,
  addDoc,
  query, getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

import { firestore } from '../firebase/firebase'
import { Task } from '../models/task'

class TaskService {
  async createTask(task) {
    const collectionReference = collection(firestore, 'tasks')
    const docRef = await addDoc(collectionReference, {
      name: task.name,
      complete: task.complete,
    })
    task.id = docRef.id
    return task
  }

  async readTasks() {
    const collectionReference = collection(firestore, 'tasks')
    const q = query(collectionReference)
    const querySnapchot = await getDoc(q)
    const tasks = []
    querySnapchot.forEach((doc)=>{
        const data = doc.data();
        const task = new Task(
            doc.id,
            data.name,
            data.complete
        )
        tasks.push(task)
    })
    return tasks
  }

  async updateTask(task) {
    const docRef = doc(firestore, 'tasks', task.id)
    await updateDoc(docRef, {
      name: task.name,
      complete: task.complete,
    })
    return task
  }

  async deleteTask(task) {
    const docReference = doc(firestore, 'tasks', task.id)
    await deleteDoc(docReference)
  }
}

const service = new TaskService()
export default service
