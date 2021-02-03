import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line max-len
const CharacterDetail = ({ name, image, gender, status, born, occupation, rank }) => (
  <figure>
    <img src={image} />
    <figcaption>{name}</figcaption>
    <ul>
      <li>{gender}</li>
      <li>{status}</li>
      {born ? <li>{born}</li> : null}
      {occupation ? <li>{occupation}</li> : null}
      {rank ? <li>{rank}</li> : null}
    </ul>
  </figure>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  born: PropTypes.string,
  occupation: PropTypes.string,
  rank: PropTypes.string
};

export default CharacterDetail;
