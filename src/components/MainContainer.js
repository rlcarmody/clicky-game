import React, { Component } from 'react';
import Navbar from './Navbar';
import ImageContainer from './ImageContainer';

class MainContainer extends Component {
  state = {
    currentScore: 0,
    highScore: 0
  };

  updateScore = () => {
    const { currentScore, highScore } = this.state;
    const newScore = currentScore + 10;
    this.setState({
      currentScore: newScore,
      highScore: newScore > highScore ? newScore : highScore
    })
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.currentScore} highScore={this.state.highScore}/>
        <ImageContainer updateScore={this.updateScore}/>
      </div>
    );
  };
};

export default MainContainer;