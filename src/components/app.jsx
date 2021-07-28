import React from "react";
import UserTableContainer from "./user_table/user_table_container";
import UserForm from "./user_form/user_form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      expenses: {},
      totals: {},
      userCounter: 0,
      expenseCounter: 0
    };
    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    let newId = this.state.userCounter + 1;
    const newUser = { [newId]: Object.assign({}, user) };
    const newState = Object.assign({}, this.state.users, newUser);
    this.setState({ users: newState, userCounter: newId });
  }

  editUser(user) {

  }

  render() {
    console.log("app", this.state)
    return (
      <>
        <div className="content">
          <section className="users-section">
            <h2>Users</h2>
            <UserTableContainer />
            <UserForm addUser={this.addUser} />
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