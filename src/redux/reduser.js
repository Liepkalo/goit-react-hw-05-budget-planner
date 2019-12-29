import { combineReducers } from 'redux';
import { TypeActions } from './action';

const expenseReduser = (state = [], { type, payload }) => {
  switch (type) {
    case TypeActions.ADD_EXPENSE:
      return [...state, payload];
    case TypeActions.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload);
    default:
      return state;
  }
};

const budgetReduser = (state = 0, { type, payload }) => {
  switch (type) {
    case TypeActions.SAVE_BUDGET:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReduser,
  expense: expenseReduser,
});
