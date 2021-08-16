
import "./App.css";
import Header from "./Components/Header"
import {Todos} from "./Components/Todos"
import {AddTodo} from "./Components/AddTodo"
import {Footer} from "./Components/Footer"
import {About} from "./Components/About"
import React, { useState , useEffect } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  let init;
  if(localStorage.getItem("todos")===null){
    init = [];
  }
  else{
    init = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo =(title, des)=>{
    
    let sn;
    if(todos.length===0){
      sn=0;
    }
    else{
     sn = todos[todos.length-1].sn + 1;
    }

    const myTodo ={
      sn : sn,
      title : title,
      des : des,
    }
    setTodos([...todos, myTodo])
    

    
    
  }

  const [todos, setTodos] = useState(init);

  useEffect(() => {
    localStorage.setItem("todos" ,JSON.stringify(todos)); 
    
  }, [todos])

  return (
  <>
  <Router>
    <Header title="Todos-List" /> 
    <Switch>
          <Route exact path="/" render={() => {
            return (
            <>
            <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />    
              </>)
            }}>
            
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
    
    <Footer />
    </Router>
  </>
  );
}

export default App;
