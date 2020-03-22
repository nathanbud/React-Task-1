import React, { Component } from 'react';
import './App.css';
import Form from './forms/Form'
import Ninja from './components/Ninja';


class App extends Component {

  state = {
    ninjas:[
      {name: "One Piece", age: 12,  belt: "black"},
      {name: "One Lord", age: 78, belt: "red"},
      {name: "One Two", age: 45, belt: "green"}

    ]
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Form/>
        <Ninja ninjas ={this.state.ninjas} />
       
      </div>
    );
  }
}

export default App;
