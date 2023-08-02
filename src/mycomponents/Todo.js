import React from 'react'

export const Todo = ({todo, onDelete }) => {
  return (
    <>
    <div>
      <h1 className="text-white"> {todo.title}</h1>
      <p className="text-white"> {todo.description}</p>
      <button className="btn btn-sm btn-danger"  onClick={ ()=> {onDelete(todo)} }>Delete</button>

    </div> 
    <hr/>
    </>
  )
}

export default Todo
