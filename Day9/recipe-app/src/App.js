import React, { useState } from 'react'
import Input from './components/Input'
import Table from './components/Table'
import dishService from './services/dishServices'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function App() {
  const [dishes, setDishes] = useState([])
  async function onDishCreated(dish) {
    try {
      dish = await dishService.createDish(dish)
      const newDishes = []
      for (let d of dishes) {
        newDishes.push(d)
        console.log(d)
      }
      newDishes.push(dish)
      setDishes(newDishes)
    } catch (err) {
      console.log(err)
    }
  }
  async function onDishRemove(dish) {
    try {
      await dishService.deleteDish(dish)
      const filteredDishes = dishes.filter((d) => {
        return d.id !== dish.id
      })
      setDishes(filteredDishes)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div className="container bg-warning">
        <div className="card card-body bg-danger bg-opacity-75">
          <h1 className="text-center" style={{ color: 'white' }}>Grandma's Special Recipes</h1>
          <img
            src="https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011-735x919.jpg"
            className="img-thumbnail float-end w-25 p-3 center"
            alt=" "
          />
          <h4 className="text-center" style={{ color: 'white' }}>the best recipes should be kept for generations,<br></br>let's store these recipes here</h4>
          <Input onDishCreated={onDishCreated}></Input>
          <Table dishes={dishes} onDishRemove={onDishRemove}>
            {' '}
          </Table>
        </div>
      </div>
    </div>
  )
}
