import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import './Input.css';

import mark from 'images/checkbox1.svg';

let dumbInput = dumbBem('sb-input');
let InputWrp = tx(dumbInput)('div');

let LabeledInput = tx([{element: 'labeled-input'}, dumbInput])('div');
let InputEl = tx([{element: 'input'}, dumbInput])('input');
let Select = tx([{element: 'select'}, dumbInput])('select');
let Label = tx([{element: 'label'}, dumbInput])('label');
let ErrorMsg = tx([{element: 'error-msg'}, dumbInput])('span');
let Icon = tx([{element: 'icon'}, dumbInput])('div');


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

    _.bindAll(this, [
      'onChange',
      'onLabelClick'
    ]);
  }

  render() {
    let hasError = !!this.props.error;
    let valid = this.props.value && !hasError && this.props.formSubmitted;

    let modifiers = [];

    if (this.props.modifiers) {
      modifiers = [...modifiers, ...this.props.modifiers];
    }

    if (hasError) {
      modifiers.push('error');
    }

    if (this.props.value) {
      modifiers.push('has-value');
    }

    if (this.props.icon) {
      modifiers.push('icon');
    }

    if (valid) {
      modifiers.push('valid');
    }

    return (
      <InputWrp>
        <LabeledInput modifier={(this.props.type === 'select' ? 'select' : '' ) + ` ${modifiers.join(' ')}`}>
          {this.props.icon && <Icon><img src={this.props.icon} alt=''/></Icon>}
          {valid && _.isUndefined(this.props.type) && <Icon modifier='valid'><img src={mark} alt=''/></Icon>}
          {
            _.isUndefined(this.props.type) && (
              <React.Fragment>
                <InputEl
                  __ref={(input) => { this.input = input; }}
                  type={this.props.fieldType || ''}
                  modifier={modifiers.join(' ')}
                  autoComplete='nope'
                  onChange={this.onChange}
                  value={this.props.value}
                />
              </React.Fragment>
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
    _.isFunction(this.props.onChange) && this.props.onChange(value);
  }

  onLabelClick() {
    this.input.focus();
  }
}
