export const UPDATE_FORM_VALUE = 'UPDATE_FORM_VALUE';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const TRIGGER_ADDRESS_AS_BILLING = 'TRIGGER_ADDRESS_AS_BILLING';

export function changeFormValue(form, field, value) {
  return {
    form,
    field,
    value,
    type: UPDATE_FORM_VALUE
  }
}

export function submitForm() {
  return {
    type: SUBMIT_FORM
  }
}

export function triggerAddressAsBilling() {
  return {
    type: TRIGGER_ADDRESS_AS_BILLING
  }
}
