import React, { FC } from 'react';

const Hero = () => {
  return (
    <div className='hero'>
      <h1
        className='chaboo'
        onClick={() => {
          const win: Window = window;
          win.location = 'https://chaboo.onrender.com';
        }}
      >
        chaboo!
      </h1>
    </div>
  );
};

export default Hero;
