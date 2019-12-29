import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import { removeExpense } from '../../redux/action';

const mapStateToProps = state => ({
  expenses: state.expense,
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
