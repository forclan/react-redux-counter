import {createStore} from 'redux';
import {INCREASE, DECREASE, CLEAR_COUNTER} from './actions'


function counterOperation(state = {counter: 0}, action) {
  // console.log('enter counterOperation', action.type);
  switch (action.type) {
    case INCREASE:
      return {counter: state.counter + 1}
    case DECREASE:
      return {counter: state.counter - 1}
    case CLEAR_COUNTER:
      return {counter: 0}
    default:
      return state;
  }
}

export default counterOperation;