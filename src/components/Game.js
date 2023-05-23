import React, { Component } from "react";
import css from './App.css';
import Card from './Card.js'

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      // activeWord: null,
      // stipulations: []
    }
  }

    componentDidMount() {
      // console.log('game mounted');
      fetch('/api')
        .then(res => res.json())
        .then(result => {
          // console.log(result)
          const word = result[Math.floor(Math.random() * result.length)]
          // console.log(word)
          return this.setState({
            activeWord: word.action,
            stipulations: word.stip
          })
        })
        // .then(res => console.log(this.state))
    }




  render() {
    return (
      <div className="game">
        <p id='score'>Score: {this.state.score}</p>
        <button id='guessed'>Guessed!</button>
        {/* <div>Hello world!</div> */}
        {/* <div id='card'> Card Placeholder</div> */}
        <Card 
          word = {this.state.activeWord}
          stipulations = {this.state.stipulations}
        />
        <button id='pass'>Pass!</button>
      </div>
    )
  }
}

export default Game;

/*

DB Format:

{"_id":{"$oid":"646cf4f4470cb20e304e9430"},
"action": "Pirate",
"stip": ["Wearing an eyepatch", "Hook Hand", "Parrot"]
}

,
"action": "Pirate",
"stip": ["Wearing an eyepatch", "Hook Hand", "Parrot"]
}

*/