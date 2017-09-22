import React from 'react';
import { connect } from 'react-redux';
import c from './../../constants';
import { v4 } from 'uuid';

class PrelimForm extends React.Component {

  constructor(props) {
    super(props);
    this.alignYourself = this.alignYourself.bind(this);
  }

  alignYourself() {
    const { _name, _views, _morals } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ALIGN,
      id: v4(),
      name: _name.value,
      morals: _morals.value,
      views: _views.value
    };
    console.log(action);
    dispatch(action);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.alignYourself}>
          <input ref="_name" type="text" placeholder="Name"/>
          <select ref="_views">
            <option value="lawful">Lawful</option>
            <option value="neutral">Neutral</option>
            <option value="chaotic">Chaotic</option>
          </select>
          <select ref="_morals">
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="evil">Evil</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(PrelimForm);
