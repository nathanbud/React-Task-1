import React, { Component } from 'react'

class Form extends Component{
    state = {
        name: ""
    }

    handleChange = e =>{
        e.preventDefault();
        this.setState({
            name: e.target.value
        })


    }
    
    render(){
        
        return(
            <div>
                <form>
                    <input type="text" onChange = {this.handleChange}/>
                </form>
        <p>My name is {this.state.name}</p>
            </div>
        )
    }       
}

export default Form