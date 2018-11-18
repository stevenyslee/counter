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

const Button = ({ className, value }) => {
  return (
    <div className={className}>
      <StyledButton onClick={() => {
        console.log(value);
      }}>{value}</StyledButton>
    </div>
    );
}

Button.propTypes = {
  value: PropTypes.number.isRequired
}

export default Button;
