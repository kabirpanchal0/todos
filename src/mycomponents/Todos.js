import React from 'react'
import {Todo} from "./Todo";

export const Todos = (props) => {
  let  myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-5 text-white" > Todos List  </h3>
      <h5 className="text-danger fw-bold">
      {props.list.length===0 ? "Your list is empty":
        props.list.map((todo) => { 
        
        return (
      
        <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
        })}
      </h5>
      
    </div>
  )
}

export default Todos
