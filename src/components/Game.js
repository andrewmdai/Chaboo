import React, { Component } from "react";
import css from './App.css';

class Game extends Component {

    componentDidMount() {
        console.log('game mounted')
    }

  render() {
    return (
      <div className="game">
        <div>Score: </div>
        <button id='guessed'>Guessed!</button>
        {/* <div>Hello world!</div> */}
        <div id='card'> Card Placeholder</div>
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