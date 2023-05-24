import React, { Component } from 'react';

class Card extends Component {
render() {
    return (
      <div id='card'>
        <h2 className='action'>{this.props.word}</h2>
        <h3>{this.props.stipulations[0]}</h3>
        <h3>{this.props.stipulations[1]}</h3>
        <h3>{this.props.stipulations[2]}</h3>
        <h3>{this.props.stipulations[3]}</h3>
      </div>
    )
  }
}

export default Card;