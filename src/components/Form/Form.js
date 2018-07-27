import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import {Input} from '../Input';

import './Form.css';


let dumbForm = dumbBem('sb-form');
let FormWrp = tx(dumbForm)('div');

let FormField = tx([{element: 'field'}, dumbForm])('div');
let FormTextField = tx([{element: 'text-field'}, dumbForm])('div');


export class Form extends Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    _.bindAll(this, [
      'renderInput',
      'renderText'
    ]);
  } 

  render() {
    return (
      <FormWrp>
        {_.map(this.props.schema, field => (
          <FormField key={field.name} style={{width: field.space}}>
            {_.isUndefined(field.type) && this.renderInput(field)}
            {field.type === 'select' && this.renderInput(field)}
            {field.type === 'text' && this.renderText(field)}
          </FormField>
        ))}
      </FormWrp>
    );
  }

  renderInput(field) {
    return (
      <Input
        name={field.name}
        type={field.type}
        fieldType={field.fieldType}
        modifiers={field.modifiers}
        placeholder={field.label}
        defaultValue={field.defaultValue}
        data={field.data}
        value={field.value}
        error={field.error}
        onChange={(value) => this.props.actions.changeFormValue(this.props.name, field.name, value)}
      />
    )
  }

  renderText(field) {
    let modifiers = field.modifiers || [];
    return (
      <FormTextField
        name={field.name}
        modifier={modifiers.join(' ')}
      >
        <span>{field.defaultValue}</span>
      </FormTextField>
    )
  }
}
