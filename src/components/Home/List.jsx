import React, { Component } from 'react';
import { getCharacters } from '../../services/xfilesapi';
import CharacterList from '../Characters/CharacterList';
import styles from './List.css';
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
      <section className={styles['main-list']}>
        <CharacterList characters={characters} />
      </section>
    );
  }
}
