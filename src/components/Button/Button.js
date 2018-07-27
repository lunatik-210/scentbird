import React, { Component } from 'react';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import './Button.css';

import arrowRight from 'images/arrow-right.svg';


let dumbButton = dumbBem('sb-button');
let ButtonWrp = tx(dumbButton)('div');

//let Header = tx([{element: 'header'}, dumbButton])('div');

export class Button extends Component {
  render() {
    return (
      <ButtonWrp onClick={this.props.onClick} modifier={this.props.modifier || ''}>
        <span>{this.props.children}</span>
        <img src={arrowRight} alt='' />
      </ButtonWrp>
    );
  }
}
