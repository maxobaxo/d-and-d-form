import React from 'react';
import PrelimForm from './PrelimForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Create extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <PrelimForm/>
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
