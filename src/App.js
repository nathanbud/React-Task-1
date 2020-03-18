import React from 'react';
import './App.css';
import Form from './forms/Form'


function App() {
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
    </div>
  );
}

export default App;
