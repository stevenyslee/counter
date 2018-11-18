import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components'

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
    return (
      <div>
        <StyledCounter />
        <StyledButtons />
      </div>
      );
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));

// Create buttons
// Place styled componets in correct places
// Attach redux to the project
