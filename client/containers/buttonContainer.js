import { connect } from 'react-redux'
import changeValue from './../actions/actions.js';
import Button from './../components/button.jsx';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  onButtonClick: (value) => {
    dispatch(changeValue(value));
  }
});

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
