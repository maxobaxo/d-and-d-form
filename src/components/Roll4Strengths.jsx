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
    const action2 = {
      type: c.SHOW_PROFILE
    }
    dispatch(action2);
  }

  render() {
    return(
      <div>
        <div className="well">
          <form onSubmit={this.finalizeCharacter}>
            <Grid>
              <h4>Choose Your Race and Class:</h4>
              <Row>
                <Col md={4}>
                  <label>Race:</label>
                  <select ref="_race">
                    <option value="Aasimar">Aasimar</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Elf">Elf</option>
                    <option value="Genasi">Genasi</option>
                    <option value="Gnome">Gnome</option>
                    <option value="Goliath">Goliath</option>
                    <option value="Half-Elf">Half-Elf</option>
                    <option value="Half-Orc">Half-Orc</option>
                    <option value="Halfling">Halfling</option>
                    <option value="Human">Human</option>
                    <option value="Tiefling">Tiefling</option>
                  </select>
                </Col>
                <Col md={4}>
                  <label>Class:</label>
                  <select ref="_class">
                    <option value="Barbarian">Barbarian</option>
                    <option value="Bard">Bard</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Druid">Druid</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Monk">Monk</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Wizard">Wizard</option>
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
  showDice: PropTypes.bool
}

export default connect()(Roll4Strengths);
