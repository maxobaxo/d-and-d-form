import React from 'react';
import PropTypes from 'prop-types';

function DisplayCharacter(props) {

  return(
    <div className="well">
      <h3>{props.name}</h3>
      <h4>{props.race} {props.class}</h4>
      <p>Strength: {props.strength}</p>
      <p>Dexterity: {props.dexterity}</p>
      <p>Constitution: {props.constitution}</p>
      <p>Intellect: {props.intellect}</p>
      <p>Wisdom: {props.wisdom}</p>
      <p>Charisma: {props.charisma}</p>
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
