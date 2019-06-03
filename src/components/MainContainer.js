import React, { Component } from 'react';
import Navbar from './Navbar';
import ImageContainer from './ImageContainer';

class MainContainer extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    resetSwitch: false,
  };

  updateScore = () => {
    const { currentScore, highScore } = this.state;
    const newScore = currentScore + 10;
    this.setState({
      currentScore: newScore,
      highScore: newScore > highScore ? newScore : highScore
    })
  };

  resetScore = () => {
    this.setState({currentScore: 0, resetSwitch: !this.state.resetSwitch});
  }

  render() {
    const { currentScore, highScore, resetSwitch } = this.state;
    return (
      <div>
        <Navbar score={currentScore} highScore={highScore} />
        <ImageContainer updateScore={this.updateScore} resetScore={this.resetScore} resetSwitch={resetSwitch} images={this.state.images}/>
      </div>
    );
  };
};

export default MainContainer;