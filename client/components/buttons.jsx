import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './button.jsx';

const StyledButton = styled(Button)`
  display: inline-block;
`

const Buttons = ({ className }) => {
  return (
    <div className={className}>
      <StyledButton value={-5} />
      <StyledButton value={-1} />
      <StyledButton value={1} />
      <StyledButton value={5} />
    </div>
    );
}

export default Buttons;