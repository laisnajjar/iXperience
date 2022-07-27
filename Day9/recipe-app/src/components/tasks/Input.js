import React, { useState } from 'react'
import { Dish } from '../../models/dish'
import Spinner from './Spinner'

export default function Input(props) {
  const [dishName, setDishName] = useState('')
  const [procedureName, setProcedureName] = useState('')
  const [saving, setSaving] = useState(false)
  async function onFormSubmitted(event) {
    event.preventDefault()
    const dish = new Dish(dishName, procedureName, null)
    setSaving(true)
    try {
      await props.onDishCreated(dish)
      setDishName('')
      setProcedureName('')
    } catch (err) {
      console.log(err)
    }
    setSaving(false)
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
        <button
          className="btn btn-primary"
          type="submit"
        >
          {saving ? <Spinner variant="info" /> : 'save'}
        </button>
      </form>
    </div>
  )
}
