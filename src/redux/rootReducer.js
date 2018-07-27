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
      let newState = {
        ...state,
        submitted: true
      };
      validateAll(newState);
      return newState;

    case TRIGGER_ADDRESS_AS_BILLING:
      return {
        ...state,
        useAddressAsBilling: !state.useAddressAsBilling
      }

    default:
      return state;
  }
}
