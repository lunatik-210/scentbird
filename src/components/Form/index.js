import React, {Component} from 'react';
import {Form} from './Form';

import {
  userInfoSchema,
  accountSchema,
  addressSchema
} from 'models';


export class UserForm extends Component {
  render() {
    return <Form schema={userInfoSchema} />
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


export * from './Form';
