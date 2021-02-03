import React, { Component } from 'react';
import { getOneCharacter } from '../../services/xfilesapi.js';
import Character from '../Characters/Character.jsx';

export default class Detail extends Component {
  state = {
    character: {}
  }

  componentDidMount() {
    getOneCharacter(this.props.match.params.name)
      .then(([character]) => this.setState({ character }));
  }
  
  render() {
    const { character } = this.state;

    return (
      <>
        <Character {...character} />
      </>
    );
  }
}
