import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
              <Text modifier='title'>MONTH-TO-MONTH SUBSCRIPTION</Text>
              <Text modifier='description'>Billed monthly. Renews automatically, cancel any time. Free shipping.</Text>

              <FormWrp>
                <FormTitle>Create account</FormTitle>
                <Form 
                  actions={this.props.actions}
                  schema={this.props.forms.accountForm}
                  name='accountForm'
                />
              </FormWrp>

              <FormWrp>
                <FormTitle>Shipping address</FormTitle>
                <Form 
                  actions={this.props.actions}
                  schema={this.props.forms.userForm}
                  name='userForm'
                />
                <Form 
                  actions={this.props.actions}
                  schema={this.props.forms.shippingForm}
                  name='shippingForm'
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
                />
              </FormWrp>

              <FormSubmitLine>
                <Button modifier='link'>Back</Button>
                <Button onClick={() => this.props.actions.submitForm()}>BUY NOW</Button>
              </FormSubmitLine>
            </FormBlock>

          </Blocks>
        </Content>
      </AppWrp>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
