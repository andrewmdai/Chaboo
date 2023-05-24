import React, { Component } from "react";
import css from './App.css';
import Card from './Card.js'




class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      activeWord: null,
      stipulations: [],
      counter: 60,
      gameOver: false,
      howTo: false
    }
  }
  testFunction() {
    console.log('hello test!')
  }

  componentDidMount() {
    this.fetchData();
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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

  startTimer() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        counter: prevState.counter - 1
      }), () => {
        if (this.state.counter === 0) {
          clearInterval(this.timer);
          this.setState({gameOver: true})
        }
      });
    }, 1000);
  }

  render() {
    const { score, activeWord, stipulations, counter, gameOver, howTo } = this.state;

    return (
      <div className="game">
        <div id='timer'>Timer: {counter}</div>
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
        <footer>
          <button id='howto' onClick={() => this.setState({howTo: true})}>how to play</button>
        </footer>

        {gameOver && (
          <div className='modal'>
            <div className='modalContent'>
              <h4>Time's Up!</h4>
              <p>Score: {score}</p>
              <button id='again' onClick={() => {
                window.location.reload(false)
              }}>Again!</button>
            </div>
          </div>
        )}


      {howTo && (
          <div className='howToModal'>
            <div className='howToContent'>
              <p>Play over Zoom or Facetime!</p>
              <p>Act out the word on the top of the card</p>
              <p>You are not allowed to act out any actions in red</p>
              <button id='howToClose' onClick={() => this.setState({howTo: false})}>close</button>
            </div>
          </div>
        )}

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