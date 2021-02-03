import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';
import styles from './characterlist.css';

const CharacterList = ({ characters }) => {
  const characterInfo = characters.map(character => (
   
    <span key={character.portrayedby}>
      <Link to={`/detail/${character.name}`}>
        <Character {...character} />
      </Link>
    </span> 
    
  ));

  return (
    <div className={styles['list']}>
      {characterInfo}
    </div>
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
