import React, { Component } from 'react';
import ImageBox from './ImageBox';
// import images from './images.json';
import shuffle from '../utils/shuffle';
import FlipMove from 'react-flip-move';

const images = [...Array(20).keys()].map(item => {
  return {
    revealed: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item + 1}.png`,
    name: item
  }
});

class ImageContainer extends Component {
  state = {
    numberOfRenders: 0
  }

  componentWillMount() {
    shuffle(images);
  }

  onClickShuffle = (timeout = 0) => {
    if (timeout > 500) {
      return;
    }
    setTimeout(() => {
      shuffle(images);
      this.setState({ numberOfRenders: this.state.numberOfRenders + 1 });
    }, timeout);
    this.onClickShuffle(timeout + 100);
  }

  render() {
    const { resetScore, updateScore, resetSwitch } = this.props;
    return (
      <FlipMove style={{ display: 'grid', gridTemplate: 'repeat(5, 1fr) / repeat(4, 1fr)', maxWidth: '100vw', justifyItems: 'center', height: '85vh', alignItems: 'center' }} duration="100">
        {images.map(pic => <ImageBox {...pic} key={pic.name} onClickShuffle={this.onClickShuffle} updateScore={updateScore} resetScore={resetScore} resetSwitch={resetSwitch} />)}
      </FlipMove>
    );

  };
};

export default ImageContainer;