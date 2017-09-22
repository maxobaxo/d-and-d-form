import React from 'react';
import PrelimForm from './PrelimForm';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

function PrelimFormControl(props) {

  return(
    <div>
      <Button onClick={props.showFormModal}>
        Begin Character Creation
      </Button>
      <Modal
        show={props.isModalVisible}
        onHide={props.hideFormModal}>
        <Modal.Header>
          <Modal.Title>Choose Your Alignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PrelimForm hideFormModal={props.hideFormModal}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}

PrelimFormControl.propTypes = {
  showFormModal: PropTypes.func,
  hideFormModal: PropTypes.func,
  isModalVisible: PropTypes.bool
}

export default PrelimFormControl;
