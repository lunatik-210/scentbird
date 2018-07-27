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
let Select = tx([{element: 'select'}, dumbInput])('select');
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
      hasValue: false
    }

    _.bindAll(this, [
      'onChange',
      'onBlur',
      'onLabelClick'
    ]);
  }

  render() {
    let { hasValue } = this.state;
    let hasError = !!this.props.error;

    let modifiers = [];

    if (this.props.modifiers) {
      modifiers = [...modifiers, ...this.props.modifiers];
    }

    if (hasError) {
      modifiers.push('error');
    }

    if (hasValue) {
      modifiers.push('has-value');
    }

    return (
      <InputWrp>
        <LabeledInput modifier={(this.props.type === 'select' ? 'select' : '' ) + ` ${modifiers.join(' ')}`}>
          {
            _.isUndefined(this.props.type) && (
              <InputEl
                __ref={(input) => { this.input = input; }}
                type={this.props.fieldType || ''}
                modifier={modifiers.join(' ')}
                autoComplete='nope'
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={this.props.value}
              />
            )
          }
          {
            this.props.type === 'select' && (
              <Select
                modifier={modifiers.join(' ')}
                onChange={this.onChange}
                value={this.props.value}
              >
                {this.props.data && _.map(this.props.data, (value, key) => <option key={key} value={key}>{value}</option>)}
              </Select>
            )
          }
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
        {hasError && <ErrorMsg>{this.props.error}</ErrorMsg>}
      </InputWrp>
    );
  }

  onChange(event) {
    let value = event.target.value;

    this.setState({
      hasValue: Boolean(value)
    });

    _.isFunction(this.props.onChange) && this.props.onChange(value);
  }

  onBlur(event) {
    this.setState({
      hasValue: Boolean(event.target.value)
    });
  }

  onLabelClick() {
    this.input.focus();
  }
}
