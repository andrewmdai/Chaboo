import React, { Component } from "react";
import Hero from './Hero.js';
import Game from './Game.js'
import Footer from './Footer.js'

class App extends Component {

  render() {
    return (
      <div className='app'>
        <Hero />
        <Game />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;