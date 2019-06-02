import React, { Component } from 'react';
import Score from './Score';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <nav className='navbar'>
        <ul className='navbar__list'>
          <li>
            Clicky Game
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