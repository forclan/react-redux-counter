import React from 'react'
import { createStore } from 'redux';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers';
import App from './App'

const store = createStore(reducer);
console.log('store state', store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
