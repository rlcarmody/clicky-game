import React, { Component } from 'react';
import ImageBox from './ImageBox';
import images from './images.json';
import shuffle from '../utils/shuffle';
import FlipMove from 'react-flip-move';

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
    return (
      <FlipMove duration="100">
        {images.map(pic => <ImageBox {...pic} key={pic.name} onClickShuffle={this.onClickShuffle} updateScore={this.props.updateScore} />)}
      </FlipMove>
    );

  };
};

export default ImageContainer;