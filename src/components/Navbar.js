import React, { Component } from 'react';
import Score from './Score';
import './Navbar.css';
import Notice from './Notice';

class Navbar extends Component {

  render() {
    return (
      <nav className='navbar'>
        <ul className='navbar__list'>
          <li id="title">
            Clicky Game
          </li>
          <li>
            <Notice lastGuess={this.props.lastGuess}/>
          </li>
          <li>
            <Score score={this.props.score} highScore={this.props.highScore}/>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;