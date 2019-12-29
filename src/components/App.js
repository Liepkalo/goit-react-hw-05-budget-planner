import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BudgetFormConteyner from './BudgetForm/BudgetFormConteyner';
import ExpenseFormConteyner from './ExpensesForm/ExpenseFormConteyner';
import ExpensesTableConteyner from './ExpensesTable/ExpensesTableConteyner';
import ValuesConteyner from './Values/ValuesConteyner';

const Contayner = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = expenses => (
  <Contayner>
    <BudgetFormConteyner />
    <ValuesConteyner />
    <ExpenseFormConteyner />
    {expenses.expenses.length > 0 && <ExpensesTableConteyner />}
  </Contayner>
);

const mapStateToProps = state => ({
  expenses: state.expense,
});
export default connect(mapStateToProps)(App);
