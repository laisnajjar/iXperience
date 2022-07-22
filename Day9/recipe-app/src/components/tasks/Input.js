import React, { useState } from 'react'
import { Dish } from '../../models/dish'

export default function Input(props) {
  const [dishName, setDishName] = useState('')
  const [procedureName, setProcedureName] = useState('')
  function onFormSubmitted(event) {
    event.preventDefault()
    const dish = new Dish(
        dishName,
        procedureName,
        null,
    )
    props.onDishCreated(dish)
    setDishName('')
    setProcedureName('')
  }

  return (
    <div>
      <form onSubmit={onFormSubmitted}>
        <div class="mt-4 mb-3" style={{ color: 'white' }}>
          <label for="exampleFormControlInput1" class="form-label">
            Name of Dish
          </label>
          <input
            value={dishName}
            onChange={(event) => setDishName(event.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mt-4 mb-3" style={{ color: 'white' }}>
          <label for="exampleFormControlTextarea1" class="form-label">
            Procedure
          </label>
          <textarea
            value={procedureName}
            onChange={(event) => setProcedureName(event.target.value)}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button class="btn btn-primary" type="Submit">
          Save
        </button>
      </form>
    </div>
  )
}
