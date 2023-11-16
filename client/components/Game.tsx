import GameCard from './Card';
import TinderCard from 'react-tinder-card';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Game = () => {
  const [timeLimit, setTimeLimit] = useState(2);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(timeLimit);
  const [gameOver, setGameOver] = useState(false);
  const [howTo, setHowTo] = useState(false);
  const [settings, setSettings] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [wordList, setWordList] = useState([]);

  const BasicButton = styled(Button)({
    fontFamily: ['Fjalla One', 'sans-serif'],
    textTransform: 'none',
    letterSpacing: '.01em',
  });

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
      {/* Start & How To, Game Start Interface */}
      {gameStarted ? (
        <div>
          <div id='gameHeader'>
            <h2
              className='chaboo'
              onClick={() => {
                const win: Window = window;
                win.location = 'https://www.chaboo.onrender.com/';
              }}
              style={{ marginTop: '0.55em' }}
            >
              chaboo!
            </h2>
            <div id='timeScore'>
              <p id='timer'>Timer: {counter}</p>
              <p id='score'>Score: {score}</p>
            </div>
          </div>

          <div className='cardContainer'>
            {wordList.map(card => (
              <TinderCard
                className='swipe'
                key={card.action}
                onSwipe={dir => swiped(dir, card.action)}
              >
                <GameCard
                  word={card.action}
                  stipulations={card.stip}
                ></GameCard>
              </TinderCard>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className='hero'>
            <h1
              className='chaboo'
              onClick={() => {
                const win: Window = window;
                win.location = 'https://www.chaboo.onrender.com/';
              }}
            >
              chaboo!
            </h1>
          </div>
          <div className='startHow'>
            <BasicButton
              id='start'
              onClick={() => {
                setTimerStarted(true);
                setGameStarted(true);
              }}
            >
              start!
            </BasicButton>
            {/* <BasicButton id='howto' onClick={() => setSettings(true)}>
              settings
            </BasicButton> */}
            <BasicButton id='howto' onClick={() => setHowTo(true)}>
              how to play
            </BasicButton>
          </div>
        </div>
      )}

      {/* Game Over Interface */}
      {gameOver && (
        <Card
          className='modal'
          variant='outlined'
          sx={{ borderRadius: '15px' }}
        >
          <div className='modalContent'>
            <h2>Time's Up!</h2>
            <h2>Score: {score}</h2>
            <BasicButton
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
            </BasicButton>
          </div>
        </Card>
      )}
      {/* How to Play Interface */}
      {howTo && (
        <Card
          className='modal'
          variant='outlined'
          sx={{ borderRadius: '15px' }}
        >
          <CardContent>
            <p>Act out the word on the top of the card</p>
            <p>You are not allowed to act out any actions in red</p>
            <p>Swipe right if your team guesses correctly</p>
            <p>Swipe left if you want to pass the current clue</p>
            <p>Try to get your team to guess as many clues as possible!</p>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <BasicButton id='howToClose' onClick={() => setHowTo(false)}>
              close
            </BasicButton>
          </CardActions>
        </Card>
      )}

      {/* Settings Interface */}
      {/* {settings && (
        <Card className='modal' sx={{ borderRadius: '15px' }}>
          <CardContent>
            <p>Settings</p>
            <p>Time Limit:</p>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <BasicButton
              size='small'
              id='howToClose'
              onClick={() => setSettings(false)}
            >
              close
            </BasicButton>
          </CardActions>
        </Card>
      )} */}
    </div>
  );
};

export default Game;
