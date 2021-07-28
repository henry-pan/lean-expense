import { connect } from "react-redux";
import { receiveExpense, removeExpense } from "../../actions/expense_actions";
import ExpenseTable from "./expense_table";


const mapStateToProps = state => ({
  users: state.users,
  expenses: Object.values(state.expenses)
});

const mapDispatchToProps = dispatch => ({
  receiveExpense: expense => dispatch(receiveExpense(expense)),
  removeExpense: expense => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseTable);
