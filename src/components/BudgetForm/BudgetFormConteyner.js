import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { saveBudget } from '../../redux/action';

const mapStateToProps = state => ({
  budget: state.budget,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(saveBudget(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetForm);
