import React, { Component } from 'react';
import ImageBox from './ImageBox';
import images from './images.json';
import shuffle from '../utils/shuffle';


class ImageContainer extends Component {
  state = {
    numClicks: 0
  }

  componentWillMount() {
    shuffle(images);
  }

  onClickShuffle = () => {
    shuffle(images);
    this.setState({ numClicks: this.state.numClicks + 1 })
  }

  render() {
    return (
      <div>
        {images.map(pic => <ImageBox src={pic.revealed} alt={pic.name} key={pic.name} onClickShuffle={this.onClickShuffle} />)}
      </div>
    );

  };
};

export default ImageContainer;