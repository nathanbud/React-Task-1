import React, { Component } from 'react';
import './App.css';
import SortNinja from './components/sortNinja';
import Ninja from './components/sortNinja';
import AddNinja from './components/Addninja';


class App extends Component {

  state = {
    ninjas:[
      {id: 1, name: "One Piece", age: 12,  belt: "black" },
      {id: 2, name: "One Lord", age: 78, belt: "red"},
      {id: 3, name: "One Two", age: 45, belt: "green"}

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
      
        <AddNinja/>
        <Ninja ninjas ={this.state.ninjas} />
        <h2>Old Ninja</h2>
        <SortNinja ninjas ={this.state.ninjas} />
       
      </div>
    );
  }
}

export default App;
