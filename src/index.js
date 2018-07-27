import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';

import configureStore from './redux/configureStore';

const store = configureStore();

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
