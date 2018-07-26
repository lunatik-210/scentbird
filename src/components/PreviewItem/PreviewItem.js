import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import './PreviewItem.css';


let dumbPreviewItem = dumbBem('sb-preview-item');
let PreviewItemwWrp = tx(dumbPreviewItem)('div');

let PreviewImg = tx([{element: 'preview-img'}, dumbPreviewItem])('picture');

let CostBlock =  tx([{element: 'cost-block'}, dumbPreviewItem])('div');
let CostInfoLine =  tx([{element: 'cost-info-line'}, dumbPreviewItem])('div');
let CostInfoLeft =  tx([{element: 'cost-info-left'}, dumbPreviewItem])('span');
let CostInfoRight =  tx([{element: 'cost-info-right'}, dumbPreviewItem])('span');

let CouponCode =  tx([{element: 'coupon-code'}, dumbPreviewItem])('span');

let Link =  tx([{element: 'link'}, dumbPreviewItem])('span');
let Separator = tx([{element: 'separator'}, dumbPreviewItem])('div');


export class PreviewItem extends Component {
  static propTypes = {
    previewImg: PropTypes.string.isRequired,
    bill: PropTypes.object.isRequired
  };

  render() {
    let {
      previewImg,
      bill
    } = this.props;

    return (
      <PreviewItemwWrp>
        <PreviewImg><img src={previewImg} alt='' /></PreviewImg>
        <CostBlock>
          <Separator />
          <CostInfoLine>
            <CostInfoLeft>Monthly subscription</CostInfoLeft>
            <CostInfoRight>{`$${bill.monthlySubscription}`}</CostInfoRight>
          </CostInfoLine>
          <CostInfoLine>
            <CostInfoLeft>Shipping</CostInfoLeft>
            <CostInfoRight>{`$${bill.shipping}`}</CostInfoRight>
          </CostInfoLine>
          <CostInfoLine>
            <CostInfoLeft>Tax</CostInfoLeft>
            <CostInfoRight>{`$${bill.tax}`}</CostInfoRight>
          </CostInfoLine>
          <CostInfoLine>
            <CostInfoLeft>Discount</CostInfoLeft>
            <CostInfoRight>{`$${bill.discount}`}</CostInfoRight>
          </CostInfoLine>
          <CostInfoLine>
            <CostInfoLeft>Credit (Balance $100)</CostInfoLeft>
            <CostInfoRight>{`$${bill.credit}`}</CostInfoRight>
          </CostInfoLine>
          <Separator />
          <CostInfoLine modifier='total'>
            <CostInfoLeft>TOTAL:</CostInfoLeft>
            <CostInfoRight>{`$${bill.total}`}</CostInfoRight>
          </CostInfoLine>
          <CouponCode>Have a <Link>coupon code</Link>?</CouponCode>
        </CostBlock>
      </PreviewItemwWrp>
    );
  }
}
