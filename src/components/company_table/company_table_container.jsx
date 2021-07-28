import { connect } from "react-redux";
import CompanyTable from "./company_table";

const mapStateToProps = state => ({
  expenses: Object.values(state.expenses)
});

export default connect(mapStateToProps)(CompanyTable);
