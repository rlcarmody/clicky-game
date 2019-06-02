import React, { Component } from 'react';


class ImageBox extends Component {

  state = {
    isClicked: false,
    resetSwitch: false
  }

  componentDidUpdate() {
    if (this.props.resetSwitch !== this.state.resetSwitch) {
      this.setState({resetSwitch: !this.state.resetSwitch, isClicked: false});
    }
  }

  onClickUpdate = () => {
    if (this.state.isClicked) {
        alert('Already clicked');
        this.props.resetScore();
    } else {
      this.setState({isClicked: true});
      this.props.onClickShuffle();
      this.props.updateScore();
    }
  }

  render() {
    return <img style={{width: '13vh', backgroundColor: '#eee', boxShadow: '2px 2px 7px -1px rgba(0,0,0,.4)'}} src={ this.props.revealed } alt={this.props.name} onClick={this.onClickUpdate} />
  };
}

export default ImageBox;