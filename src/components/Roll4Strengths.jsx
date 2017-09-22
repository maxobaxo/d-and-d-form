import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import c from './../constants';
import PropTypes from 'prop-types';

class Roll4Strengths extends React.Component {

  constructor(props) {
    super(props);
    this.finalizeCharacter = this.finalizeCharacter.bind(this);
    this.rollDie = this.rollDie.bind(this);
  }

  rollDie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  finalizeCharacter() {
    const dieValues = [this.rollDie(1, 5), this.rollDie(1, 7), this.rollDie(1, 9), this.rollDie(1, 11), this.rollDie(1, 13), this.rollDie(1, 21)];

    const attributesArr = [];
    for (var i = 0; i < 6; i++) {
      let counter = Math.floor((Math.random() * dieValues.length) + 0);
      attributesArr.push(dieValues[counter]);
      dieValues.splice(counter, 1);
    }

    const strength = attributesArr[0];
    const dexterity = attributesArr[1];
    const constitution = attributesArr[2];
    const intellect = attributesArr[3];
    const wisdom = attributesArr[4];
    const charisma = attributesArr[5];

    const { _race, _class } = this.refs;
    const { dispatch } = this.props;
    let action = null;
    if (_race.value !== 'Select a Race' && _class.value !== 'Select a Class') {
      action = {
        type: c.FINALIZE_CHARACTER,
        id: this.props.characterList[0].id,
        race: _race.value,
        class: _class.value,
        strength: strength,
        dexterity: dexterity,
        constitution: constitution,
        intellect: intellect,
        wisdom: wisdom,
        charisma: charisma
      }
    }
    dispatch(action);
  }

  render() {
    return(
      <div>
        <div className="well">
          <form onSubmit={this.finalizeCharacter}>
            <Grid>
              <Row>
                <Col md={4}>
                  <label>Race:</label>
                  <select ref="_race">
                    <option value="aasimar">Aasimar</option>
                    <option value="dragonborn">Dragonborn</option>
                    <option value="elf">Elf</option>
                    <option value="genasi">Genasi</option>
                    <option value="gnome">Gnome</option>
                    <option value="goliath">Goliath</option>
                    <option value="half-elf">Half-Elf</option>
                    <option value="half-orc">Half-Orc</option>
                    <option value="halfling">Halfling</option>
                    <option value="human">Human</option>
                    <option value="tiefling">Tiefling</option>
                  </select>
                </Col>
                <Col md={4}>
                  <label>Class:</label>
                  <select ref="_class">
                    <option value="barbarian">Barbarian</option>
                    <option value="bard">Bard</option>
                    <option value="cleric">Cleric</option>
                    <option value="druid">Druid</option>
                    <option value="fighter">Fighter</option>
                    <option value="monk">Monk</option>
                    <option value="paladin">Paladin</option>
                    <option value="ranger">Ranger</option>
                    <option value="rogue">Rogue</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="warlock">Warlock</option>
                    <option value="wizard">Wizard</option>
                  </select>
                </Col>
                <Col md={4}>
                  <Button type="submit">Roll for your Strengths!</Button>
                </Col>
              </Row>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

Roll4Strengths.propTypes = {
  characterList: PropTypes.array.isRequired,
}

export default connect()(Roll4Strengths);
