import React, { Component } from 'react';
import Navbar from './Navbar';
import ImageContainer from './ImageContainer';

class MainContainer extends Component {
  state = {
    currentScore: 0,
    highScore: 0
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.currentScore} highScore={this.state.highScore}/>
        <ImageContainer />
      </div>
    );
  };
};

export default MainContainer;