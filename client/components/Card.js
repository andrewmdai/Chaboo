import React from 'react';

const Card = props => {
  return (
    <div id='card'>
      <h2 className='action'>{props.word}</h2>
      <h3>{props.stipulations[0]}</h3>
      <h3>{props.stipulations[1]}</h3>
      <h3>{props.stipulations[2]}</h3>
      <h3>{props.stipulations[3]}</h3>
    </div>
  );
};

export default Card;
