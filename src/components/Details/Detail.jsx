import React, { Component } from 'react';
import { getOneCharacter } from '../../services/xfilesapi.js';
import CharacterDetail from '../Characters/CharacterDetail.jsx';

export default class Detail extends Component {
  state = {
    character: {}
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    getOneCharacter(this.props.match.params.name)
      .then(([character]) => this.setState({ character }));
  }
  
  render() {
    const { character } = this.state;

    return (
      <>
        <CharacterDetail {...character} />
      </>
    );
  }
}
