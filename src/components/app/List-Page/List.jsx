import React, { Component } from 'react';
import { getCharacters } from '../../../services/xfilesapi';

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
      <ul>
        {characters.map(character => (
          <li key={character.portrayedby}>
            <p>{character.name}</p>
            <img src={character.image} />
          </li>
        ))}
        
      </ul>
    );
  }
}
