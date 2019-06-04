import React, { Component } from 'react';
import './Notice.css';

class Notice extends Component {
  state = {
    text: 'Click Each Pokemon only once',
    styleClass: 'notice',
    grow: false
  };

  componentWillReceiveProps(newProps) {
    const text = newProps.lastGuess ? 'Correct' : 'Try Again';
    const styleClass = newProps.lastGuess ? 'notice notice--correct' : 'notice notice--incorrect';
    this.setState({ text, styleClass, grow: true});
  }

  render() {
    const {styleClass, grow, text} = this.state
    return <span className={`${styleClass} ${grow ? 'grow' : ''}`} onAnimationEnd={() => this.setState({grow: false})}>{text}</span>;
  }
}

export default Notice;