import React from 'react';
import { connect } from 'react-redux';
import c from './../constants';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

class PrelimForm extends React.Component {

  constructor(props) {
    super(props);
    this.alignYourself = this.alignYourself.bind(this);
  }

  alignYourself() {
    const { _name, _views, _morals } = this.refs;
    const { dispatch } = this.props;
    const alignment = _views.value + ' ' + _morals.value;
    const action = {
      type: c.ALIGN,
      id: v4(),
      name: _name.value,
      alignment: alignment
    };
    dispatch(action);
    this.props.hideFormModal();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.alignYourself}>
          <input ref="_name" type="text" placeholder="Name"/>
          <label>Select Views: </label>
          <select ref="_views">
            <option value="Lawful">Lawful</option>
            <option value="Neutral">Neutral</option>
            <option value="Chaotic">Chaotic</option>
          </select>
          <label>Select Morals: </label>
          <select ref="_morals">
            <option value="Good">Good</option>
            <option value="Neutral">Neutral</option>
            <option value="Evil">Evil</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PrelimForm.propTypes = {
  hideFormModal: PropTypes.func
}

export default connect()(PrelimForm);
