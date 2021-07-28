import { connect } from "react-redux";
import { receiveExpense, removeExpense } from "../../actions/expense_actions";
import CompanyTable from "./company_table";


const mapStateToProps = state => ({
  expenses: Object.values(state.expenses)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(CompanyTable);
