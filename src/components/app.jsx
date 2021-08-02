import React from "react";
import UserTableContainer from "./user_table/user_table_container";
import ExpenseTableContainer from "./expense_table/expense_table_container";
import CompanyTableContainer from "./company_table/company_table_container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "user"
    }
    this.toggleUser = this.toggleUser.bind(this);
    this.toggleExpense = this.toggleExpense.bind(this);
  }


  toggleUser() {
    this.setState({currentTab: "user"});
  }


  toggleExpense() {
    this.setState({currentTab: "expense"});
  }


  render() {
    return (
      <>
        <header>
          <nav>
            <h1>LeanExpense</h1>
            <button onClick={this.toggleUser}>Users</button>
            <button onClick={this.toggleExpense}>Expenses</button>
          </nav>
        </header>
        <div className="content">
          {this.state.currentTab === "user" ? <UserTableContainer /> : <ExpenseTableContainer />}
          <CompanyTableContainer />
        </div>
      </>
    );
  }
}

export default App;