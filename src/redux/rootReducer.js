import {
  UPDATE_FORM_VALUE,
  SUBMIT_FORM,
  TRIGGER_ADDRESS_AS_BILLING
} from './actions';

import {
  validateFieldValue,
  validateAll
} from 'models/validator';


function updateFormValueReducer(state = {}, action, submitted) {
  let {form, field, value} = action;
  return {
    ...state[form],
    [field]: {
      ...state[form][field],
      value: value,
      error: submitted ? validateFieldValue(value, state[form][field], state[form]) : ''
    }
  }
}


function validateAllReducer(state = {}, action) {
  let newState = {
    ...state,
    submitted: true
  };
  let isValidForm = validateAll(newState);
  console.log(`Form is valid: ${isValidForm}`);
  return newState;
}


function triggerAddressAsBillingReducer(state = {}, action) {
  return {
    ...state,
    useAddressAsBilling: !state.useAddressAsBilling
  }
}


export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      let {form} = action;
      return {
        ...state,
        forms: {
          ...state.forms,
          [form]: updateFormValueReducer(state.forms, action, state.submitted)
        }
      };

    case SUBMIT_FORM:
      return validateAllReducer(state, action)

    case TRIGGER_ADDRESS_AS_BILLING:
      return triggerAddressAsBillingReducer(state, action)

    default:
      return state;
  }
}
