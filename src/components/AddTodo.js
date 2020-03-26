import React, { Component } from 'react'

class AddTodo extends Component{

    state = {
        id: null,
        task: null,
        description: null

    }
    handleAddTodo = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
      

    }

    submitAddTodo = (e) => {
        e.preventDefault();
    this.props.addtodo(this.state);
      this.setState({
          task: '',
          description: ''
      })
    }

    render(){
        return(
            <div className="container">
                <form action="" onSubmit = {this.submitAddTodo}>
                <input type="text" id="task" placeholder = "Your New Task " onChange={this.handleAddTodo} value ={this.state.task}/>
                <input type="text" id="description" placeholder = "Your New Task description" onChange={this.handleAddTodo} value = {this.state.description}/>
                <button>Add</button>
                </form>
               

            </div>
        )
    }
}

export default AddTodo