import React, { Component } from 'react';
import './App.css';
import Clues from './components/clues.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clues for</h1>
          <br/>
          <h1 className="App-title">221 B Baker St</h1>  
        </header>
        <Clues></Clues>
      </div>
    );
  }
}

export default App;
