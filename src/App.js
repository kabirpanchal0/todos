import './App.css';
import Header from "./mycomponents/header";
import {Todos} from "./mycomponents/Todos";
import {Footer} from "./mycomponents/Footer";
import {Addtodo} from "./mycomponents/Addtodo";
import {About} from "./mycomponents/About";

import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
  

function App() {
  let initTodo;
  if (localStorage.getItem("list")===null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("list"));
  }
  const onDelete = (todo) => {
    console.log("Delete Todo", todo);
    setList(list.filter((k) => {
      return k!==todo;
    }));
   localStorage.setItem("list", JSON.stringify(list));
  // let index = list.indexOf(todo);
  // list.splice(index, 1);
        
  }

  const addTodo = (title, description) => {
    console.log("todo added", title, description)
    let sno; 
    if(list.length==0){
    sno = 0;
    }
    else{
    sno = list[list.length - 1].sno + 1;
    }

    
    const myTodo = {
      sno: sno,
      title: title,
      description: description
    }
    setList([...list, myTodo]);
    console.log(myTodo);
    localStorage.setItem("list", JSON.stringify(list));

  }

  const [list, setList] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (

    <>
      <Router>
      <Header title="To Dos List" searchBar={false} />
      <Routes>
        <Route exact path="/" element={
          <React.Fragment>
            <Addtodo addTodo={addTodo} />
            <Todos list={list} onDelete={onDelete} /> 

          </React.Fragment>
        }/>
 {/* <Route exact path="/?"  render = {()=>{
            return (
            <>
            <Addtodo addTodo={addTodo} />
            <Todos list={list} onDelete={onDelete} /> 
            
            </>)
          } }>  
          </Route> */}
          <Route exact path="/about" element={ <About />} >
           
          </Route>
      </Routes>
       <Footer />
      </Router>

    </>

  );
  }

export default App
