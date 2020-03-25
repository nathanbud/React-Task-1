import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';



class App extends Component {
  state = {
    todos: [
    { id: 1,
      task:"Get Milk",
      description: "Get best milk on earth" },
    { id: 2,
      task:"Play",
      description: "Play basketball"},
   ]
  }

  addTodo = (newtodo) => {
    const todos = [...this.state.todos, newtodo];
    this.setState({
      todos: todos
    })
    console.log(todos);
  }

  deleteTodo = (id) =>{
   let todos = this.state.todos.filter(todo =>{
      return todo.id !==id;
    })

    this.setState({
      todos
    })
  }

  render(){
    
    return(
      <div>
       <AddTodo addtodo={this.addTodo} />
        <p>Todos</p>
       <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo}/>

      </div>
    )
  }
}

export default App

  
