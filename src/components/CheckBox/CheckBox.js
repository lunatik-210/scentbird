import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';


import checkbox1 from 'images/checkbox1.svg';
import checkbox2 from 'images/checkbox2.svg';

import './CheckBox.css';


let dumbCheckBox = dumbBem('sb-checkbox');
let CheckBoxWrp = tx(dumbCheckBox)('div');

// let CheckMark = tx([{element: 'checkmark'}, dumbCheckBox])('span');

export class CheckBox extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    _.bindAll(this, ['onChange']);
  }

  componentWillMount() {
    let {checked} = this.props;
    if (!_.isUndefined(checked)) {
      this.setState({checked});
    }
  }

  render() {
    let {checked} = this.state;
    let markIcon = this.props.modifier === 'reverse' ? checkbox2 : checkbox1;
    return (
      <CheckBoxWrp
        modifier={`${this.props.modifier || ''} ${checked ? 'checked' : ''}`}
        onClick={this.onChange}>
        {checked && <img src={markIcon} alt='' />}
      </CheckBoxWrp>
    );
  }

  onChange() {
    let {onChange} = this.props;
    let checked = !this.state.checked;

    if (_.isFunction(onChange)) {
      onChange(checked);
    }

    this.setState({checked});
  }
}
