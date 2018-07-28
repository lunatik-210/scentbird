import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import sizeMe from 'react-sizeme';

import {
  changeFormValue,
  submitForm,
  triggerAddressAsBilling
} from 'redux/actions';

import dumbBem from 'dumb-bem';
import tx from 'transform-props-with';

import {
  PreviewItem,
  BirdBanner,
  Form,
  CardForm,
  CheckBox,
  Button
} from 'components';

import './App.css';

import logo from 'images/logo.svg';
import spirit from 'images/spirit.svg';


let dumbApp = dumbBem('sb-app');
let AppWrp = tx(dumbApp)('div');

let Content = tx([{element: 'content'}, dumbApp])('div');
let Blocks = tx([{element: 'blocks'}, dumbApp])('div');
let Block = tx([{element: 'block'}, dumbApp])('div');
let FormBlock = tx([{element: 'block'}, dumbApp])('form');
let FormWrp = tx([{element: 'form-wrapper'}, dumbApp])('div');
let FormTitle = tx([{element: 'form-title'}, dumbApp])('span');
let Header = tx([{element: 'header'}, dumbApp])('header');
let Text = tx([{element: 'text'}, dumbApp])('span');
let EnableBillingLine = tx([{element: 'enable-billing-line'}, dumbApp])('span');
let FormSubmitLine = tx([{element: 'form-submit-line'}, dumbApp])('div');


class App extends Component {
  constructor(props) {
    super(props);

    _.bindAll(this, [
      'renderHeading',
      'renderForms',
      'renderToLaptop'
    ]);
  }

  render() {
    let previewItem = {
      previewImg: spirit,
      bill: {
        monthlySubscription: '$14.95',
        shipping: 'FREE',
        tax: '$2.35',
        discount: '-$5',
        credit: '$50',
        total: '$25'
      }
    }

    let isPhone = this.props.size.width <= 480;

    if (this.props.size.width <= 992) return this.renderToLaptop(previewItem, isPhone);

    return (
      <AppWrp>
        <Content>
          <Header><img src={logo} alt='' /></Header>
          <Blocks>
            <Block>
              <PreviewItem {...previewItem} />
              <BirdBanner />
            </Block>

            <FormBlock modifier='fill-space'>
              {this.renderHeading()}
              {this.renderForms(isPhone)}
            </FormBlock>

          </Blocks>
        </Content>
      </AppWrp>
    );
  }

  renderToLaptop(previewItem, isPhone) {
    return (
      <AppWrp>
        <Content>
          <Header><img src={logo} alt='' /></Header>
          <Blocks>
            {this.renderHeading()}

            <Block>
              <PreviewItem {...previewItem} />
            </Block>

            <FormBlock modifier='fill-space'>
              {this.renderForms(isPhone)}
            </FormBlock>

            <Block>
              <BirdBanner />
            </Block>
          </Blocks>
        </Content>
      </AppWrp>
    );
  }

  renderHeading() {
    return (
      <React.Fragment>
        <Text modifier='title'>MONTH-TO-MONTH SUBSCRIPTION</Text>
        <Text modifier='description'>Billed monthly. Renews automatically, cancel any time. Free shipping.</Text>
      </React.Fragment>
    )
  }

  renderForms(isPhone) {
    return (
      <React.Fragment>
        <FormWrp>
          <FormTitle>Create account</FormTitle>
          <Form 
            actions={this.props.actions}
            schema={this.props.forms.accountForm}
            name='accountForm'
            isPhone={isPhone}
          />
        </FormWrp>

        <FormWrp>
          <FormTitle>Shipping address</FormTitle>
          <Form 
            actions={this.props.actions}
            schema={this.props.forms.userForm}
            name='userForm'
            isPhone={isPhone}
          />
          <Form 
            actions={this.props.actions}
            schema={this.props.forms.shippingForm}
            name='shippingForm'
            isPhone={isPhone}
          />
          <Form
            actions={this.props.actions}
            schema={this.props.forms.phoneForm}
            name='phoneForm'
            isPhone={isPhone}
          />
          <EnableBillingLine>
            <CheckBox
              onChange={() => this.props.actions.triggerAddressAsBilling()}
              checked={this.props.useAddressAsBilling}
              modifier='reverse'
            />
            <span>Use this address as my billing address</span>
          </EnableBillingLine>
        </FormWrp>

        {
          !this.props.useAddressAsBilling && (
            <FormWrp>
              <FormTitle>Billing address</FormTitle>
              <Form 
                actions={this.props.actions}
                schema={this.props.forms.billingForm}
                name='billingForm'
                isPhone={isPhone}
              />
            </FormWrp>
          )
        }

        <FormWrp modifier='card'>
          <FormTitle>Secure credit card payment</FormTitle>
          <CardForm 
            actions={this.props.actions}
            schema={this.props.forms.cardForm}
            name='cardForm'
            isPhone={isPhone}
          />
        </FormWrp>

        <FormSubmitLine>
          <Button modifier='link'>Back</Button>
          <Button onClick={() => this.props.actions.submitForm()}>BUY NOW</Button>
        </FormSubmitLine>
      </React.Fragment>
    )
  }
}

let mapStateToProps = (state) => state;

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      changeFormValue,
      submitForm,
      triggerAddressAsBilling
    }, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(sizeMe()(App));
