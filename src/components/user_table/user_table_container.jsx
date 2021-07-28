import { connect } from "react-redux";
import { receiveUser, removeUser } from "../../actions/user_actions";
import { removeExpense } from "../../actions/expense_actions";
import UserTable from "./user_table";


const mapStateToProps = state => ({
  users: Object.values(state.users),
  expenses: state.expenses
});

const mapDispatchToProps = dispatch => ({
  receiveUser: user => dispatch(receiveUser(user)),
  removeUser: user => dispatch(removeUser(user)),
  removeExpense: expense => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps,mapDispatchToProps)(UserTable);
