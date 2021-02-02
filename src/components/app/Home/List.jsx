import React, { Component } from 'react';
import { getCharacters } from '../../../services/xfilesapi';
import CharacterList from '../Characters/CharacterList';

export default class List extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;

    return (
      <CharacterList characters={characters} />
    );
  }
}
