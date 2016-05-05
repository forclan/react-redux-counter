import * as CounterActions from './actions';
import {bindActionCreators} from 'redux';
import Counter from './Counter';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);