import React, { Component } from 'react';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import './GenderBlock.css';

import women from 'images/women.svg';
import men from 'images/men.svg';


let dumbGenderBlock = dumbBem('sb-gender');
let GenderBlockWrp = tx(dumbGenderBlock)('div');

let Title = tx([{element: 'title'}, dumbGenderBlock])('div');
let GenderLine = tx([{element: 'gender-line'}, dumbGenderBlock])('div');
let GenderWrp = tx([{element: 'gender-wrapper'}, dumbGenderBlock])('div');
let Gender = tx([{element: 'gender'}, dumbGenderBlock])('div');

export class GenderBlock extends Component {
  render() {
    return (
      <GenderBlockWrp>
        <Title>Choose your subscription type</Title>
        <GenderLine>
          <GenderWrp>
            <Gender><img src={women} alt='' /></Gender>
            <Title>For women</Title>
          </GenderWrp>
          <GenderWrp>
            <Gender><img src={men} alt='' /></Gender>
            <Title>For Men</Title>
          </GenderWrp>
        </GenderLine>
      </GenderBlockWrp>
    );
  }
}
