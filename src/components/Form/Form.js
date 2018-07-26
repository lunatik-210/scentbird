import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import {Input} from '../Input';

import './Form.css';


let dumbForm = dumbBem('sb-form');
let FormWrp = tx(dumbForm)('div');

let FormField = tx([{element: 'field'}, dumbForm])('div');

let formSchema = [
  {
    name: 'street_address',
    label: 'Street address',
    validation: ['required'],
    space: '66%'
  },
  {
    name: 'apt',
    label: 'Apt (optional)',
    space: '33%'
  },
  {
    name: 'zip_code',
    label: 'Zip Code',
    space: '33%',
    validation: ['required']
  },
  {
    name: 'city',
    label: 'City',
    space: '33%',
    validation: ['required']
  },
  {
    name: 'state',
    label: 'State',
    space: '33%',
    validation: ['required']
  },
  {
    name: 'country',
    defaultValue: 'UNITED STATES',
    space: '100%',
    modifiers: ['disabled'],
    validation: ['required']
  },
  {
    name: 'mobile_phone',
    label: 'Mobile phone (optional)',
    space: '50%',
    validation: ['required']
  },
  {
    name: 'discount_text',
    type: 'text',
    defaultValue: 'We may send you special discounts and offers',
    space: '50%'
  }
];

export class Form extends Component {
  //static propTypes = {
    //previewImg: PropTypes.string.isRequired,
    //bill: PropTypes.object.isRequired
  //};

  render() {
    return (
      <FormWrp>
        {formSchema.map(field => (
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
