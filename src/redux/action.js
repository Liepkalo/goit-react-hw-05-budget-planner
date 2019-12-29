import shortid from 'shortid';

export const TypeActions = {
  SAVE_BUDGET: 'SAVE_BUDGET',
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const saveBudget = value => ({
  type: TypeActions.SAVE_BUDGET,
  payload: value,
});

export const addExpense = (name, amount) => ({
  type: TypeActions.ADD_EXPENSE,
  payload: {
    id: shortid.generate(),
    name,
    amount: Number(amount),
  },
});

export const removeExpense = id => ({
  type: TypeActions.REMOVE_EXPENSE,
  payload: id,
});
