import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import c from './../constants';

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

    const { _race, _class } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.FINALIZE_CHARACTER,
      race: _race.value,
      class: _class.value,
      strength: dieValues[0],
      dexterity: dieValues[1],
      constitution: dieValues[2],
      intellect: dieValues[3],
      wisdom: dieValues[4],
      charisma: dieValues[5]
    }
    console.log(action);
  }

  render() {
    return(
      <div>
        <div className="well">
          <form onSubmit={this.finalizeCharacter}>
            <Grid>
              <Row>
                <Col md={4}>
                  <select ref="_race">
                    <option disabled selected>Select a Race</option>
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
                  <select ref="_class">
                    <option disabled selected>Select a Class</option>
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

export default Roll4Strengths;
