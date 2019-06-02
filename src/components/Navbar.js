import React, { Component } from 'react';
import Score from './Score';

class Navbar extends Component {

  render() {
    return (
      <nav>
        <ul>
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