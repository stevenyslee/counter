import { connect } from 'react-redux'
import changeValue from './../actions/actions.js';
import Button from './../components/button.jsx';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: value => {
      dispatch(changeValue(value));
    }
  }
}

const ChangeValueButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ChangeValueButton;
