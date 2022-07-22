import React from 'react'

export default function Table(props) {
  function onDishRemove(dish) {
    props.onDishRemove(dish)
  }
  return (
    <div className="mt-4">
      <table className="table table-danger" >
        <thead>
          <tr>
            <th> </th>
            <th>Dish</th>
            <th className='text-lg-center'>Discription</th>
          </tr>
        </thead>
        <tbody className="table-warning">
          {props.dishes.map((dish) => (
            <tr key={dish.id}>
              <td>
                <button
                  onClick={(e) => onDishRemove(dish)}
                  className="btn btn-primary btn-sm ms-3">
                  <i className="bi bi-trash2 trashcan"></i>
                </button>
              </td>
              <td>{dish.name}</td>
              <td className='text-lg-center'>{dish.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
