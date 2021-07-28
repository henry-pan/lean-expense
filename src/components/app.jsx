import React from "react";
import UserTableContainer from "./user_table/user_table_container";
import ExpenseTableContainer from "./expense_table/expense_table_container";
import CompanyTableContainer from "./company_table/company_table_container";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header>
          <h1>LeanExpense</h1>
        </header>
        <div className="content">
          <UserTableContainer />
          <ExpenseTableContainer />
          <section className="company-section">
            <h2>Company Expenses</h2>
            <CompanyTableContainer />
          </section>

        </div>
      </>
    );
  }

}

export default App;