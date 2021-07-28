import React from "react";
import Table from "./table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      expenses: {},
      totals: {}
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <section className="users-section">
            <h2>Users</h2>
            <Table />
          </section>
          <section className="expense-section">
            <h2>Expenses</h2>
            <Table />
          </section>
          <section className="company-section">
            <h2>Company Expense</h2>
            <Table />
          </section>

        </div>
      </>
    );
  }

}

export default App;