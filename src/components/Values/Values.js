import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Stat from './Stat';

const Contayner = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses }) => (
  <Contayner>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat
      label="Balance"
      value={budget - expenses}
      isPositive={budget - expenses >= 0}
    />
  </Contayner>
);

Values.propTypes = {
  budget: propTypes.number.isRequired,
  expenses: propTypes.number.isRequired,
};

export default Values;
