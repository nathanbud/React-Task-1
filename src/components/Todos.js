import React from 'react'

const Todos = ({todos, deleteTodo}) =>{
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
              <div key = {todo.id}>
              <p>Task: {todo.task}</p>
              <p>Description: {todo.description}</p>
              <button onClick={()=> {deleteTodo(todo.id)}}>DELETE</button>
              </div>
            );
          })  
    ) : (
        <p>No more things to do</p>
    )
      return(
          <div>
              {todoList}
          </div>
      )
}

export default Todos