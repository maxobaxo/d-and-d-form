import React from 'react';
import PrelimFormControl from './PrelimFormControl';
import Roll4Strengths from './Roll4Strengths';
import DisplayCharacter from './DisplayCharacter';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.hideCreateButton
  }

  hideCreateButton() {
    const { dispatch } = this.props;
    const action = {
      type: c.HIDE_CREATE_BUTTON
    }
    dispatch(action);
  }

  showFormModal(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const action = {
      type: c.SHOW_ALIGN_MODAL
    }
    dispatch(action);
    this.hideCreateButton();
  }

  hideFormModal() {
    const { dispatch } = this.props;
    const action = {
      type: c.HIDE_ALIGN_MODAL
    }
    dispatch(action);
  }

  render() {
    return(
      <div>
        <PrelimFormControl
          showFormModal={this.showFormModal}
          hideFormModal={this.hideFormModal}
          isModalVisible={this.props.masterState.isModalVisible}
          isButtonHidden={this.props.masterState.isButtonHidden}
        />
        <br/>
        <Roll4Strengths
          characterList={this.props.masterState.characterList}/>
        {this.props.masterState.characterList.map((character) =>
          <DisplayCharacter
            name={character.name}
            alignment={character.alignment}
            race={character.race}
            class={character.class}
            key={character.id}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    masterState : state
  }
}

export default connect(mapStateToProps)(Create);
