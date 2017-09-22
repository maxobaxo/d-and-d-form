import React from 'react';
import PropTypes from 'prop-types';

function DisplayCharacter(props) {

  return(
    <div className="well">
      <h3>Name: {props.name}</h3>
      <p>{props.race} {props.class}</p>
    </div>
  )
}

DisplayCharacter.propTypes = {
  name: PropTypes.string,
  alignment: PropTypes.string,
  race: PropTypes.string,
  class: PropTypes.string
}

export default DisplayCharacter;
