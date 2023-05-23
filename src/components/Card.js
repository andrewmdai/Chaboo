import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   // score: 0,
    //   activeWord: null,
    //   stipulations: []
    // }
  }

  // componentDidMount() {
  //   // console.log('game mounted');
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(result => {
  //       // console.log(result)
  //       const word = result[Math.floor(Math.random() * result.length)]
  //       console.log(word)
  //       return this.setState({
  //         activeWord: word.action,
  //         stipulations: word.stip
  //       })
  //     })
  //     .then(res => console.log(this.state))
  // }


render() {
    // console.log(this.props)

  // console.log(this.props.stipulations)
  // const arr = this.props.stipulations;
  // console.log(arr)
    // const stip = this.props.stipulations.map((element, index) => {
    //   return (
    //     <h3>{element}</h3>
    //   )
    // })
  // const renderedOutput = arr.map((element, index) => {
  //   console.log('hi')
  // })

    return (
      // <h1>hello</h1>
      <div id='card'>
        <h2 className="action">{this.props.word}</h2>
        {/* {stip} */}
        <h3>{this.props.stipulations}</h3>
        <h3>demo</h3>
        <h3>demo</h3>
        {/* {renderedOutput} */}
      </div>
    )
  }
}

export default Card;