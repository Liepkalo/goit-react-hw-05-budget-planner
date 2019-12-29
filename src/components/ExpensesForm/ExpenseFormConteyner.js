import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense, removeExpense } from '../../redux/action';

const mapStateToProps = state => ({
  expenses: state.expense,
  name: state.name,
  amount: state.amount,
});

const mapDispatchToProps = dispatch => ({
  addExpense: (name, amount) => dispatch(addExpense(name, amount)),
  removeExpense: id => dispatch(removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseForm);
