import React, { Component } from "react";
import css from './App.css';
import Card from './Card.js'




class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      activeWord: null,
      stipulations: []

    }
  }
  testFunction() {
    console.log('hello test!')
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch('/api')
      .then(res => res.json())
      .then(result => {
        const word = result[Math.floor(Math.random() * result.length)]
        this.setState({
          activeWord: word.action,
          stipulations: word.stip
        })
      })
  }

  // function App() {
  //   const [counter, setCounter] = React.useState(60);
  
  //   // Third Attempts
  //   React.useEffect(() => {
  //     const timer =
  //       counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //     return () => clearInterval(timer);
  //   }, [counter]);
  
  //   return (
  //     <div className="App">
  //       <div>Countdown: {counter}</div>
  //     </div>
  //   );
  // }


  render() {
    return (
      <div className="game">

        {/* <div>
          <div>Countdown: {counter}</div>
        </div> */}

        <p id='score'>Score: {this.state.score}</p>
        <button id='guessed' onClick={() => {
          this.fetchData();
          this.setState({score: this.state.score + 1})
        }}>Guessed!</button>
        <Card 
          word = {this.state.activeWord}
          stipulations = {this.state.stipulations}
        />
        <button id='pass' onClick={() => {
          this.fetchData();
        }}>Pass!</button>
      </div>
    )
  }
}

export default Game;

/*

DB Format:
,
"action": "Pirate",
"stip": ["Wearing an eyepatch", "Hook Hand", "Parrot"]

*/