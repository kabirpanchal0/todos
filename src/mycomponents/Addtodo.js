import React, { useState } from 'react'

export const Addtodo = ({addTodo}) => {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");


    const submit= (k)=>{
            k.preventDefault(); 
            if(!title || !description){
                alert("Title or Description can not be blank");
            }
            else{
                addTodo(title, description);
                setTitle = ("");
                setDescription = ("");
    
            }
            
    }
    return (
        <div className="container">
            <h1 className="text-white my-3"> To Do </h1>
            <form onSubmit={submit}>  
                <div className="mb-3">
                    <label htmlFor="title" className="form-label text-white">TO DO Title</label>
                    <input type="text" value={title} onChange={(k)=>setTitle(k.target.value)} className=" form-control bg-dark text-white" id="title" />
                       
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label text-white">Add Description</label>
                    <input type="text" value={description} onChange={(k)=>setDescription(k.target.value)} className="form-control bg-dark text-white" id="description"/>
                </div>
                 
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo 
