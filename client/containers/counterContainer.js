import { connect } from 'react-redux'
import Counter from './../components/counter.jsx';
import getValue from './../reducers/value.js';

const mapStateToProps = state => {
  return {
    counterValue: state.counterValue
  }
}

const mapDispatchToProps = dispatch => ({ });

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
