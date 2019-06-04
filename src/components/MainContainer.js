import React, { Component } from 'react';
import Navbar from './Navbar';
import ImageContainer from './ImageContainer';

class MainContainer extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    resetSwitch: false,
    lastGuess: false
  };

  updateScore = () => {
    const { currentScore, highScore } = this.state;
    const newScore = currentScore + 10;
    this.setState({
      currentScore: newScore,
      highScore: newScore > highScore ? newScore : highScore,
      lastGuess: true
    })
    if (newScore % 200 === 0) {
      this.setState({resetSwitch: !this.state.resetSwitch});
    }
  };

  resetScore = () => {
    this.setState({currentScore: 0, resetSwitch: !this.state.resetSwitch, lastGuess: false});

  }

  render() {
    const { currentScore, highScore, resetSwitch, lastGuess } = this.state;
    return (
      <div>
        <Navbar score={currentScore} highScore={highScore} lastGuess={lastGuess}/>
        <ImageContainer updateScore={this.updateScore} resetScore={this.resetScore} resetSwitch={resetSwitch} images={this.state.images}/>
      </div>
    );
  };
};

export default MainContainer;