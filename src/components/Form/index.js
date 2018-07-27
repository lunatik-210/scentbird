import React, {Component} from 'react';
import {Form} from './Form';


let userInfo = [
  {
    name: 'first_name',
    label: 'First name',
    validation: ['required'],
    space: '50%'
  },
  {
    name: 'last_name',
    label: 'Last name',
    validation: ['required'],
    space: '50%'
  }
];


let accountSchema = [
  {
    name: 'email',
    label: 'Email address',
    validation: ['required'],
    space: '50%'
  },
  {
    name: 'password',
    label: 'Password',
    validation: ['required'],
    space: '50%'
  }
];


let addressSchema = [
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


let cardSchema = [
  {
    name: 'card_number',
    label: 'Credit card number',
    validation: ['required'],
    space: '60%'
  },
  {
    name: 'security_code',
    label: 'Security code',
    validation: ['required'],
    space: '40%'
  },
  {
    name: 'month',
    label: 'Month',
    validation: ['required'],
    space: '20%'
  },
  {
    name: 'year',
    label: 'Year',
    validation: ['required'],
    space: '20%'
  },
  {
    name: 'exp',
    type: 'text',
    label: 'Exp.',
    space: '60%'
  }
];


export class UserForm extends Component {
  render() {
    return <Form schema={userInfo} />
  }
}


export class AccountForm extends Component {
  render() {
    return <Form schema={accountSchema} />
  }
}


export class AddressForm extends Component {
  render() {
    return <Form schema={addressSchema} />
  }
}


export class CardForm extends Component {
  render() {
    return <Form schema={cardSchema} />
  }
}


export * from './Form';
