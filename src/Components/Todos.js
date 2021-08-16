import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    let styleme ={
        minHeight: "43.5vh",
        margin: "50px auto",
        
    }
    return (
        <div className="container" style={styleme}>
           <h3 className="fs-2">Todos List</h3>
           {props.todos.length===0? "No Todos to display":
           props.todos.map((todo)=>{
               return ( <Todo todo={todo} key={todo.sn} onDelete={props.onDelete}/>
           )
           })
           }
            
        </div>
    )
}
