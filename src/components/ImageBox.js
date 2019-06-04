import React, { Component } from 'react';
import './ImageBox.css';

class ImageBox extends Component {

  state = {
    isClicked: false,
  }

  componentWillReceiveProps(newProps) {
    if (this.props.resetSwitch !== newProps.resetSwitch) {
      this.setState({isClicked: false});
    }
  }

  onClickUpdate = () => {
    if (this.state.isClicked) {
        this.props.resetScore();
    } else {
      this.setState({isClicked: true});
      this.props.onClickShuffle();
      this.props.updateScore();
    }
  }

  render() {
    return <img className='imageBox' src={ this.props.image } alt={this.props.name} onClick={this.onClickUpdate} />
  };
}

export default ImageBox;