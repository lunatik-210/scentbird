import _ from 'lodash';

import validator from 'validator';
import cardValidator from 'card-validator';


export function validateFieldValue(value, field, form, strong = false) {
  if (field.required) {
    if (!value || value.length === 0) return 'Field is required';
  }

  if (field.name === 'password') {
    if (value.length < 10) return 'Should be no less than 10 symbols';
  }

  if (field.name === 'email') {
    if (!validator.isEmail(value)) return 'You should enter a valid email';
  }

  if (field.name === 'card_number') {
    let check = cardValidator.number(value);
    if (!check.isPotentiallyValid || (strong && !check.isValid)) return 'Invalid card number';
  }

  if (field.name === 'security_code') {
    if (value && value.length < 3 || value.length > 5) return 'Invalid security code';
    if (value === '111') return '111 is also not valid';
  }

  if (field.name === 'month') {
    let check = cardValidator.expirationDate({month: value, year: form['year'].value});
    if (!check.isPotentiallyValid || (strong && !check.isValid)) return 'Invalid month';
  }

  if (field.name === 'year') {
    let check = cardValidator.expirationDate({month: form['month'].value, year: value});
    if (!check.isPotentiallyValid || (strong && !check.isValid)) return 'Invalid year';
  }

  if (field.name === 'mobile_phone' && value) {
    if (!validator.isMobilePhone(value, 'en-US', {strictMode: true})) return 'Phone number is incorrect, only US';
  }

  if (field.fieldType === 'text' && !/^[a-zA-Z ]*$/.test(value)) return 'Shoud be only character';

  if (field.fieldType === 'number' && !validator.isNumeric(value)) return 'Shoud be a number';

  return '';
}

export function validateAll(state) {
  let valid = true;

  _.map(state.forms, (form, formName) => {
    if (state.useAddressAsBilling && formName === 'billingForm') return;

    _.map(form, (field, fieldName) => {
      state.forms = {
        ...state.forms,
        [formName]: {
          ...state.forms[formName],
          [fieldName]: {
            ...state.forms[formName][fieldName],
            error: validateFieldValue(field.value, field, form, true)
          }
        }
      }

      if (state.forms[formName][fieldName].error) {
        valid = false
      }
    })
  });

  return valid;
}