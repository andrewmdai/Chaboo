import React, { Component } from "react";
// import css from './App.css';
import Hero from './Hero.js';
// import Menu from './Menu.js'
import Game from './Game.js'
import Footer from './Footer.js'


class App extends Component {

  render() {
    return (
      <div className='app'>
        <Hero />
        <Game />
        {/* <Menu /> */}
        <Footer />
      </div>
    )
  }
}

export default App;