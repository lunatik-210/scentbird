import { createStore } from 'redux';
import rootReducer from './rootReducer';

import {
  cardSchema,
  userInfoSchema,
  accountSchema,
  addressSchema,
  phoneSchema
} from 'models';


let schemaToStore = (schema) => {
  return schema.reduce((store, item) => {
    if (item.type === 'text') {
      return {
        ...store,
        [item.name]: {
          ...item
        }
      }
    }

    return {
      ...store,
      [item.name]: {
        ...item,
        error: '',
        value: item.defaultValue || ''
      }
    }
  }, {})
}


export default function configureStore (initialState = {}) {
  initialState = {
    ...initialState,
    forms: {
      userForm: schemaToStore(userInfoSchema),
      accountForm: schemaToStore(accountSchema),
      cardForm: schemaToStore(cardSchema),
      shippingForm: schemaToStore(addressSchema),
      billingForm: schemaToStore(addressSchema),
      phoneForm: schemaToStore(phoneSchema)
    },
    useAddressAsBilling: true,
    submitted: false
  }

  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer);
    })
  }

  return store
}
