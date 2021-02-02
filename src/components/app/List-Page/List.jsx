import React, { Component } from 'react';

export default class List extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    // eslint-disable-next-line max-len
    fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters')
      .then(res => res.json())
      .then(json => this.setState({ characters: json.results }));
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
