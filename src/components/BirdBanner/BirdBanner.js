import React, { Component } from 'react';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import './BirdBanner.css';

import birdImage from 'images/bird.svg';


let dumbBirdBanner = dumbBem('sb-bird-banner');
let BirdBannerWrp = tx(dumbBirdBanner)('div');

let Banner = tx([{element: 'banner'}, dumbBirdBanner])('picture');
let Text = tx([{element: 'text'}, dumbBirdBanner])('span');


export class BirdBanner extends Component {
  render() {
    return (
      <BirdBannerWrp>
        <Banner><img src={birdImage} alt='' /></Banner>
        <Text>You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.</Text>
      </BirdBannerWrp>
    );
  }
}
