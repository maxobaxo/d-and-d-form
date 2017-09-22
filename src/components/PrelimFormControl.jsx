import React from 'react';
import PrelimForm from './PrelimForm';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import c from './../constants';

class PrelimFormControl extends React.Component {

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
        <Button onClick={this.showFormModal}>
          Begin Character Creation
        </Button>
        <Modal
          show={this.props.masterState.isModalVisible}
          onHide={this.hideFormModal}>
          <Modal.Header>
            <Modal.Title>Choose Your Alignment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PrelimForm hideFormModal={this.hideFormModal}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterState : state
  }
}

export default connect(mapStateToProps)(PrelimFormControl);
