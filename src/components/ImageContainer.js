import React, { Component } from 'react';
import ImageBox from './ImageBox';
import shuffle from '../utils/shuffle';
import FlipMove from 'react-flip-move';
import { pokeGetter } from '../utils/pokegetter';
import Spinner from './Spinner';
import './ImageContainer.css';

class ImageContainer extends Component {
  state = {
    numberOfRenders: 0,
    images: [],
    nextUrl: '',
    isLoaded: false
  }

  async getAndSetPokemonData(url) {
    const { pokemon, nextUrl } = await pokeGetter(url);
    this.pokemon = pokemon;
    shuffle(this.pokemon);
    this.setState({ nextUrl, isLoaded: true });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.resetSwitch !== newProps.resetSwitch) {
      this.setState({isLoaded: false});
      this.getAndSetPokemonData(this.state.nextUrl);
    }
  };

  componentDidMount() {
    this.getAndSetPokemonData();
  };

  onClickShuffle = (timeout = 0) => {
    if (timeout > 500) {
      return;
    }
    setTimeout(() => {
      shuffle(this.pokemon);
      this.setState({ numberOfRenders: this.state.numberOfRenders + 1 });
    }, timeout);
    this.onClickShuffle(timeout + 100);
  };

  render() {
    const { resetScore, updateScore, resetSwitch } = this.props;
    if (!this.state.isLoaded) {
      return <Spinner />
    }
    return (
      <FlipMove className="imageContainer" duration="100">
        {this.pokemon.map(pic => <ImageBox {...pic} key={pic.name} onClickShuffle={this.onClickShuffle} updateScore={updateScore} resetScore={resetScore} resetSwitch={resetSwitch} />)}
      </FlipMove>
    );
  };
};

export default ImageContainer;