import {USStates} from './states';
import {years} from './years';
import {months} from './months';

import questionIcon from 'images/question.svg';

export let cardSchema = [
  {
    name: 'card_number',
    label: 'Credit card number',
    icon: questionIcon,
    required: true,
    modifiers: ['light'],
    space: '60%',
    fieldType: 'number',
    phoneOrder: 1
  },
  {
    name: 'security_code',
    label: 'Security code',
    required: true,
    modifiers: ['light'],
    space: '35%',
    fieldType: 'number',
    phoneOrder: 4,
    phoneSpace: '65%'
  },
  {
    name: 'icon',
    type: 'icon',
    icon: questionIcon,
    space: '5%',
    phoneOrder: 5,
    phoneSpace: '5%'
  },
  {
    name: 'month',
    defaultValue: '1',
    type: 'select',
    data: months,
    required: true,
    modifiers: ['light'],
    space: '25%',
    phoneOrder: 2,
    phoneSpace: '50%'
  },
  {
    name: 'year',
    defaultValue: new Date().getFullYear(),
    type: 'select',
    data: years,
    required: true,
    modifiers: ['light'],
    space: '25%',
    phoneOrder: 3,
    phoneSpace: '50%'
  },
  {
    name: 'exp',
    type: 'text',
    defaultValue: 'Exp.',
    modifiers: ['card-exp-text'],
    space: '50%'
  }
];


export let userInfoSchema = [
  {
    name: 'first_name',
    label: 'First name',
    required: true,
    fieldType: 'text',
    space: '50%'
  },
  {
    name: 'last_name',
    label: 'Last name',
    required: true,
    fieldType: 'text',
    space: '50%'
  }
];


export let accountSchema = [
  {
    name: 'email',
    label: 'Email address',
    required: true,
    space: '50%'
  },
  {
    name: 'password',
    fieldType: 'password',
    label: 'Password',
    required: true,
    space: '50%'
  }
];


export let addressSchema = [
  {
    name: 'street_address',
    label: 'Street address',
    required: true,
    space: '66%'
  },
  {
    name: 'apt',
    label: 'Apt (optional)',
    space: '33%'
  },
  {
    name: 'zip_code',
    fieldType: 'number',
    label: 'Zip Code',
    space: '33%',
    required: true
  },
  {
    name: 'city',
    label: 'City',
    space: '33%',
    required: true
  },
  {
    name: 'state',
    defaultValue: 'AL',
    type: 'select',
    data: USStates,
    space: '33%'
  },
  {
    name: 'country',
    defaultValue: 'UNITED STATES',
    space: '100%',
    modifiers: ['disabled'],
    required: true
  }
];

export let phoneSchema = [
  {
    name: 'mobile_phone',
    label: 'Mobile phone (optional)',
    space: '50%'
  },
  {
    name: 'discount_text',
    type: 'text',
    defaultValue: 'We may send you special discounts and offers',
    modifiers: ['disabled'],
    space: '50%'
  }
]
