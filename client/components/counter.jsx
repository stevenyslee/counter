import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledCounter = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
  color: palevioletred;
  font-weight: bold;
`

const Counter = ({ className, children }) => {
  return (
    <div className={className}>
      <StyledCounter>0</StyledCounter>
    </div>
    );
}

export default Counter;
