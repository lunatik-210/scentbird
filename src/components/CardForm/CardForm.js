import React, { Component } from 'react';
import PropTypes from 'prop-types';

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


export class CardForm extends Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

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
        <Form 
          actions={this.props.actions}
          schema={this.props.schema}
          name='cardForm'
        />
      </CardFormWrp>
    );
  }
}
