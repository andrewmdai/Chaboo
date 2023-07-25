import React, { FC } from 'react';
import Hero from './Hero';
import Game from './Game';

const App: FC = () => {
  return (
    <div className='app'>
      <Hero />
      <Game />
    </div>
  );
};

export default App;
