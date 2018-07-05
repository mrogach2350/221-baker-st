import React, { Component } from 'react';
import clues from '../data/clues.json';

class Clues extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clueNum: '', 
            clueText: '', 
            err: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    errorText = ['Invalid Clue Number!', 'Please try again!'];

    handleChange(event) {
        let query = event.target.value;
        this.setState({clueNum: query});
    }

    handleSubmit(event) {
        event.preventDefault();
        let query = this.state.clueNum;
        let parsedQuery = parseInt(query);
        if (!parsedQuery) {
            this.setState({clueText: this.errorText, err: true});
        } else {
            if (parsedQuery > 0 && parsedQuery < 281) {
                let foundClue = clues.find(clue => clue.clueNumber === parsedQuery);
                this.setState({clueText: foundClue.clueText, err: false});
            } else {
                this.setState({clueText: this.errorText, err: true});
            }
        }
    }

    render() {
        let displayClue;

        if (this.state.err) {
            displayClue = <div><h3>{this.state.clueText[0]}</h3><h3>{this.state.clueText[1]}</h3> </div>;
        } else {
            displayClue = <h3>{this.state.clueText}</h3>;
        }

        return (
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Clue #:
                    <input value={this.state.clueNum} onChange={this.handleChange} type="text" name="name" />
                    </label>
                    <input type="submit" value="Deduce" />
                </form>

                <h1>Current Clue</h1>
                
                {displayClue}
            </div>
        );
    }
}

export default Clues;