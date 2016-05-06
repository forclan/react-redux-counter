import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers';
import App from './App'
import middleWare from './middleWare';

let finalCreateStore = applyMiddleware(middleWare)(createStore);
const store = finalCreateStore(reducer);
console.log('store state', store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
