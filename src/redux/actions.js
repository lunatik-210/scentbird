export const UPDATE_FORM_VALUE = 'UPDATE_FORM_VALUE';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export function changeFormValue(form, field, value) {
  console.log(form, field, value);
  return {
    form,
    field,
    value,
    type: UPDATE_FORM_VALUE
  }
}

export function submitForm(account) {
  return {
    account,
    type: SUBMIT_FORM
  }
}
