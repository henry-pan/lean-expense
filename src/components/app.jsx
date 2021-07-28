import React from "react";
import UserTableContainer from "./user_table/user_table_container";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="content">
          <section className="users-section">
            <h2>Users</h2>
            <UserTableContainer />
          </section>
          <section className="expense-section">
            <h2>Expenses</h2>
          </section>
          <section className="company-section">
            <h2>Company Expense</h2>
          </section>

        </div>
      </>
    );
  }

}

export default App;