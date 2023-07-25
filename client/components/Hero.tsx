import React, { FC } from 'react';

const Hero:FC = () => {
  return (
    <div className='hero'>
      <h1 className='chaboo' onClick={() => {
        //  window.location = 'https://www.quell.dev/';
      }}>chaboo!</h1>
    </div>
  );
};

export default Hero;
