import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const characterInfo = characters.map(character => (
   
    <li key={character.portrayedby}>
      <Link to={`/detail/${character.name}`}>
        <Character {...character} />
      </Link>
    </li> 
    
  ));

  return (
    <ul>
      {characterInfo}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    portrayedby: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  })).isRequired
};

export default CharacterList;
