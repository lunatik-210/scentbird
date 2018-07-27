import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import './Input.css';


let dumbInput = dumbBem('sb-input');
let InputWrp = tx(dumbInput)('div');

let LabeledInput = tx([{element: 'labeled-input'}, dumbInput])('div');
let InputEl = tx([{element: 'input'}, dumbInput])('input');
let Label = tx([{element: 'label'}, dumbInput])('label');
let ErrorMsg = tx([{element: 'error-msg'}, dumbInput])('span');


export class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    modifiers: PropTypes.array,
    defaultValue: PropTypes.any
  };

  constructor(props) {
    super(props);

    this.input = React.createRef();

    this.state = {
      hasValue: false,
      hasError: false
    }

    _.bindAll(this, [
      'onChange',
      'onBlur',
      'onLabelClick'
    ]);
  }

  render() {
    let { hasValue, hasError } = this.state;
    let valid = !hasError && hasValue;

    let modifiers = [];

    if (this.props.modifiers) {
      modifiers = [...modifiers, ...this.props.modifiers];
    }

    if (hasError) {
      modifiers.push('error');
    }

    if (valid) {
      modifiers.push('valid');
    }

    return (
      <InputWrp>
        <LabeledInput>
          <InputEl
            __ref={(input) => { this.input = input; }}
            type={this.props.name === 'password' ? 'password' : ''}
            modifier={modifiers.join(' ')}
            autoComplete='nope'
            onChange={this.onChange}
            onBlur={this.onBlur}
            defaultValue={this.props.defaultValue}
          />
          {
            this.props.placeholder && (
              <Label
                modifier={modifiers.join(' ')}
                onClick={this.onLabelClick}
              >
                {this.props.placeholder}
              </Label>
            )
          }
        </LabeledInput>
        {hasError && <ErrorMsg>Test</ErrorMsg>}
      </InputWrp>
    );
  }

  onChange(event) {
    this.setState({
      hasValue: Boolean(event.target.value),
      hasError: false
    })
  }

  onBlur(event) {
    this.setState({
      value: Boolean(event.target.value),
      hasError: false
    })
  }

  onLabelClick() {
    this.input.focus();
  }
}
