import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);
Label.propTypes = {
  children: propTypes.arrayOf(propTypes.any.isRequired).isRequired,
  customStyles: propTypes.string.isRequired,
};

export default Label;
