import React from 'react';
import Card from './Card';
import TinderCard from 'react-tinder-card';
import { useState, useEffect } from 'react';

const Game = () => {
  const timeLimit = 60;
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(timeLimit);
  const [gameOver, setGameOver] = useState(false);
  const [howTo, setHowTo] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [wordList, setWordList] = useState([]);

  // Get all words from database
  const randomizeArray = array => {
    array.sort((a, b) => {
      return Math.random() - 0.5;
    });
    return array;
  };

  const fetchAllWords = () => {
    fetch('/api')
      .then(res => res.json())
      .then(result => {
        setWordList(randomizeArray(result));
      });
  };

  useEffect(() => {
    fetchAllWords();
  }, []);

  // Swiping feature
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    if (direction === 'right') {
      setScore(score + 1);
    }
  };

  // Set Game Over
  const gg = () => {
    if (counter === 0) {
      setGameOver(true);
    }
  };

  // Timer Feature
  useEffect(() => {
    if (timerStarted && counter > 0) {
      const timer = setInterval(() => {
        setCounter(prevCounter => prevCounter - 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    } else {
      gg();
    }
  }, [timerStarted, counter]);

  return (
    <div className='game'>
      <div id='timeScore'>
        <p id='timer'>Timer: {counter}</p>
        <p id='score'>Score: {score}</p>
      </div>

      {/* Start & How To, Game Start Interface */}
      {gameStarted ? (
        <div className='cardContainer'>
          {wordList.map(card => (
            <TinderCard
              className='swipe'
              key={card.action}
              onSwipe={dir => swiped(dir, card.action)}
            >
              <Card word={card.action} stipulations={card.stip}></Card>
            </TinderCard>
          ))}
        </div>
      ) : (
        <div className='startHow'>
          <button
            id='start'
            onClick={() => {
              setTimerStarted(true);
              setGameStarted(true);
            }}
          >
            start!
          </button>
          <button id='howto' onClick={() => setHowTo(true)}>
            how to play
          </button>
        </div>
      )}

      {/* Game Over Interface */}
      {gameOver && (
        <div className='modal'>
          <div className='modalContent'>
            <h4>Time's Up!</h4>
            <p>Score: {score}</p>
            <button
              id='again'
              onClick={() => {
                setGameOver(false);
                setCounter(timeLimit);
                setScore(0);
                setTimerStarted(true);
                setGameStarted(true);
                fetchAllWords();
              }}
            >
              again!
            </button>
          </div>
        </div>
      )}
      {howTo && (
        <div className='howToModal'>
          <div>
            <p>Act out the word on the top of the card</p>
            <p>You are not allowed to act out any actions in red</p>
            <p>Swipe right if your team guesses correctly</p>
            <p>Swipe left if you want to pass the current clue</p>
            <p>Try to get your team to guess as many clues as possible!</p>
            <button id='howToClose' onClick={() => setHowTo(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
