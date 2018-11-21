import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Provider } from'react-redux';

import store from './store/store.js';
import Counter from './components/counter.jsx';
import Buttons from './components/buttons.jsx';

const StyledCounter = styled(Counter)`
  text-align: center;
`

const StyledButtons = styled(Buttons)`
  text-align: center;
`

class App extends React.Component {
  render() {
    console.log(store);
    return (
      <div>
        <StyledCounter />
        <StyledButtons />
      </div>
      );
  }
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));

// Create buttons
// Place styled componets in correct places
// Attach redux to the project
