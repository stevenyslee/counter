import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Buttons = ({ className }) => {
  return (
    <div className={className}>
      <StyledButton>Button 1</StyledButton>
      <StyledButton>Button 2</StyledButton>
      <StyledButton>Button 3</StyledButton>
      <StyledButton>Button 4</StyledButton>
    </div>
    );
}

export default Buttons;
