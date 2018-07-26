import React, { Component } from 'react';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import {
  PreviewItem,
  BirdBanner
} from 'components';

import './App.css';

import logo from 'images/logo.svg';
import spirit from 'images/spirit.svg';


let dumbApp = dumbBem('sb-app');
let AppWrp = tx(dumbApp)('div');

let Content = tx([{element: 'content'}, dumbApp])('div');
let Blocks = tx([{element: 'blocks'}, dumbApp])('div');
let Block = tx([{element: 'block'}, dumbApp])('div');
let Header = tx([{element: 'header'}, dumbApp])('header');
let Text = tx([{element: 'text'}, dumbApp])('span');

class App extends Component {
  render() {
    let previewItem = {
      previewImg: spirit,
      bill: {
        monthlySubscription: 14.95,
        shipping: 'FREE',
        tax: 2.35,
        discount: 5,
        credit: 50,
        total: 25
      }
    }

    return (
      <AppWrp>
        <Content>
          <Header><img src={logo} alt='' /></Header>
          <Blocks>
            <Block>
              <PreviewItem {...previewItem} />
              <BirdBanner />
            </Block>
            <Block modifier='fill-space'>
              <Text modifier='title'>MONTH-TO-MONTH SUBSCRIPTION</Text>
              <Text modifier='description'>Billed monthly. Renews automatically, cancel any time. Free shipping.</Text>
            </Block>
          </Blocks>
        </Content>
      </AppWrp>
    );
  }
}

export default App;
