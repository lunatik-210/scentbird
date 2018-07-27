import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import {Input} from '../Input';

import './Form.css';


let dumbForm = dumbBem('sb-form');
let FormWrp = tx(dumbForm)('div');

let FormField = tx([{element: 'field'}, dumbForm])('div');



export class Form extends Component {
  static propTypes = {
    schema: PropTypes.array.isRequired
  };

  render() {
    return (
      <FormWrp>
        {this.props.schema.map(field => (
          <FormField key={field.name} style={{width: field.space}}>
            <Input
              name={field.name}
              modifiers={field.modifiers}
              placeholder={field.label}
              defaultValue={field.defaultValue} />
          </FormField>
        ))}
      </FormWrp>
    );
  }
}
