import React, {Component, PropTypes} from 'react';
import counterOperation from './reducers';

export default class Counter extends Component {
  render() {
    const {counter, counterAdd, counterDecrease, counterClear} = this.props;
    return (
      <div>
        <p>
          Clicked: {counter} Times
          <button onClick={counterAdd}>
          +
          </button>
          <button onClick={counterDecrease}>
          -
          </button>
          <button onClick={counterClear}>
          Clear
          </button>
        </p>
      </div>
    );
  }
};
Counter.PropTypes = {
  counter: PropTypes.number.isRequired,
  counterAdd: PropTypes.func.isRequired,
  counterDecrease: PropTypes.func.isRequired,
  counterClear: PropTypes.func.isRequired,
}
