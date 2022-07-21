import {
  collection,
  addDoc,
//   query,
//   getDoc,
  doc,
//   updateDoc,
  deleteDoc,
} from 'firebase/firestore'

import { firestore } from '../firebase/firebase'
// import { Dish } from '../models/dish'

class DishService {
  async createDish(dish) {
    const collectionReference = collection(firestore, 'recipe-app')
    const docRef = await addDoc(collectionReference, {
        name:dish.name,
        description:dish.description
    })
    dish.id = docRef.id
    return dish
  }
  async deleteDish(dish){
    const docReference = doc(firestore, 'recipe-app', dish.id)
    await deleteDoc(docReference)
  }
}

const service = new DishService()
export default service