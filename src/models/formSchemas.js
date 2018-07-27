import {USStates} from './states';

export let cardSchema = [
  {
    name: 'card_number',
    label: 'Credit card number',
    validation: ['required'],
    modifiers: ['light'],
    space: '60%'
  },
  {
    name: 'security_code',
    label: 'Security code',
    validation: ['required'],
    modifiers: ['light'],
    space: '40%'
  },
  {
    name: 'month',
    label: 'Month',
    validation: ['required'],
    modifiers: ['light'],
    space: '20%'
  },
  {
    name: 'year',
    label: 'Year',
    validation: ['required'],
    modifiers: ['light'],
    space: '20%'
  },
  {
    name: 'exp',
    type: 'text',
    defaultValue: 'Exp.',
    modifiers: ['card-exp-text'],
    space: '60%'
  }
];


export let userInfoSchema = [
  {
    name: 'first_name',
    label: 'First name',
    validation: ['required'],
    space: '50%'
  },
  {
    name: 'last_name',
    label: 'Last name',
    validation: ['required'],
    space: '50%'
  }
];


export let accountSchema = [
  {
    name: 'email',
    label: 'Email address',
    validation: ['required'],
    space: '50%'
  },
  {
    name: 'password',
    label: 'Password',
    validation: ['required'],
    space: '50%'
  }
];


export let addressSchema = [
  {
    name: 'street_address',
    label: 'Street address',
    validation: ['required'],
    space: '66%'
  },
  {
    name: 'apt',
    label: 'Apt (optional)',
    space: '33%'
  },
  {
    name: 'zip_code',
    label: 'Zip Code',
    space: '33%',
    validation: ['required']
  },
  {
    name: 'city',
    label: 'City',
    space: '33%',
    validation: ['required']
  },
  {
    name: 'state',
    type: 'select',
    data: USStates,
    space: '33%'
  },
  {
    name: 'country',
    defaultValue: 'UNITED STATES',
    space: '100%',
    modifiers: ['disabled'],
    validation: ['required']
  },
  {
    name: 'mobile_phone',
    label: 'Mobile phone (optional)',
    space: '50%',
    validation: ['required']
  },
  {
    name: 'discount_text',
    type: 'text',
    defaultValue: 'We may send you special discounts and offers',
    modifiers: ['disabled'],
    space: '50%'
  }
];
