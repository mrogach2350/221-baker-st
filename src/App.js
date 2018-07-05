import React, { Component } from 'react';
import './App.css';
import clues from './data/clues.json';

import Clues from './components/clues.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {clueNum: '', clueText: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({clueNum: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let foundClue = clues.find(clue => clue.clueNumber === parseInt(this.state.clueNum));
    this.setState({clueText: foundClue.clueText});
  }

  handleClick() {
    window.location = "./data/game-rules.pdf";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clues for</h1>
          <br/>
          <h1 className="App-title">221 B Baker St</h1>  
          <button onClick={this.handleClick}>View Rules</button>
        </header>
        {/* <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Clue #:
            <input value={this.state.clueNum} onChange={this.handleChange} type="text" name="name" />
          </label>
          <input type="submit" value="Deduce" />
        </form>

        <h1>Current Clue</h1>
        <h3>{this.state.clueText}</h3> */}
        <Clues></Clues>
      </div>
    );
  }
}

export default App;