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

const Counter = ({ className, children, value }) => {
  return (
    <div className={className}>
      <StyledCounter>{value}</StyledCounter>
    </div>
    );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
}

export default Counter;
