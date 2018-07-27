import {
  UPDATE_FORM_VALUE,
  SUBMIT_FORM
} from './actions';


export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      console.log(UPDATE_FORM_VALUE);
      return state;

    case SUBMIT_FORM:
      console.log(SUBMIT_FORM);
      return state;

    default:
      return state;
  }
}
