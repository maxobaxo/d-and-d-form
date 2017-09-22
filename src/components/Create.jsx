import React from 'react';
import PrelimFormControl from './PrelimFormControl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Create extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <PrelimFormControl/>
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
