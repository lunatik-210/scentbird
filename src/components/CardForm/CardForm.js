import React, { Component } from 'react';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import {Form} from '../Form';

import './CardForm.css';

import encryption from 'images/encryption.svg';
import ccards from 'images/ccards.svg';


let dumbCardForm = dumbBem('sb-card-form');
let CardFormWrp = tx(dumbCardForm)('div');

let Header = tx([{element: 'header'}, dumbCardForm])('div');
let Encryption = tx([{element: 'encryption'}, dumbCardForm])('div');


let cardSchema = [
  {
    name: 'card_number',
    label: 'Credit card number',
    validation: ['required'],
    modifiers: ['light'],
    space: '60%'
  },
  {
    name: 'security_code',
    label: 'Security code',
    validation: ['required'],
    modifiers: ['light'],
    space: '40%'
  },
  {
    name: 'month',
    label: 'Month',
    validation: ['required'],
    modifiers: ['light'],
    space: '20%'
  },
  {
    name: 'year',
    label: 'Year',
    validation: ['required'],
    modifiers: ['light'],
    space: '20%'
  },
  {
    name: 'exp',
    type: 'text',
    defaultValue: 'Exp.',
    modifiers: ['card-exp-text'],
    space: '60%'
  }
];


export class CardForm extends Component {
  render() {
    return (
      <CardFormWrp>
        <Header>
          <Encryption>
            <img src={encryption} alt='' />
            <span>128-BIT ENCRYPTION. YOU’RE SAFE</span>
          </Encryption>
          <img src={ccards} alt='' />
        </Header>
        <Form schema={cardSchema} />
      </CardFormWrp>
    );
  }
}
