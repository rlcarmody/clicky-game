import React, { Component } from 'react';


class ImageBox extends Component {

  state = {
    isClicked: false
  }

  componentDidUpdate() {
    console.log(`-------------------\n${this.props.alt}: ${this.state.isClicked}`)
  }

  onClickUpdate = () => {
    if (this.state.isClicked) {
      alert('Already clicked');
    } else {
      this.setState({isClicked: true});
      this.props.onClickShuffle();
    }
  }

  render() {
    return <img src={this.props.src} alt={this.props.alt} onClick={this.onClickUpdate} />
  };
}

export default ImageBox;