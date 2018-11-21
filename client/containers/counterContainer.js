import { connect } from 'react-redux'
import Counter from './../components/counter.jsx';
import getValue from './../reducers/value.js';

const mapStateToProps = state => {
  return {
    value: getValue(state.value, state.changeValue)
  }
}

const mapDispatchToProps = dispatch => ({ });

const UpdateCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default UpdateCounter;
