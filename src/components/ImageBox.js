import React, { Component } from 'react';


class ImageBox extends Component {

  state = {
    isClicked: false
  }

  onClickUpdate = () => {
    if (this.state.isClicked) {
      alert('Already clicked');
    } else {
      this.setState({isClicked: true});
      this.props.onClickShuffle();
      this.props.updateScore();
    }
  }

  render() {
    return <div style={{display: 'inline-block', margin: '5px'}}><img src={ this.props.revealed } alt={this.props.name} onClick={this.onClickUpdate} /></div>
  };
}

export default ImageBox;