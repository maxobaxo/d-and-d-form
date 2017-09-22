import React from 'react';
import PrelimFormControl from './PrelimFormControl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
  }

  showFormModal(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const action = {
      type: c.SHOW_ALIGN_MODAL
    }
    dispatch(action);
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
        />
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
