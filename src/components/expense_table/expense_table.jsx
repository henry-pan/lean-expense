import React from "react";
import ExpenseItem from "../expense_item/expense_item";
import ExpenseForm from "../expense_form/expense_form";

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterUser: "",
      filterCategory: "",
      filterDate: ""
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const { users, expenses, receiveExpense, removeExpense } = this.props;
    const { filterUser, filterCategory, filterDate } = this.state;
    const usersArr = Object.values(users);
    const expensesArr = Object.values(expenses);

    const expensesList = expensesArr.map((expense, i) => {
      if (filterUser && filterUser != expense.userId) return;
      return <ExpenseItem expense={expense} key={i}
        receiveExpense={receiveExpense}
        removeExpense={removeExpense}
        users={users} />
    });


    const userListOptions = usersArr.map(user => <option value={user.id} key={user.id}>{`${user.firstName} ${user.lastName}`}</option>);


    return (
      <section className="ui-section">
        <h2>Expenses</h2>
        <div className="filter-buttons">
          <select value={filterUser} onChange={e=>this.handleInput("filterUser", e)}>
            <option value="">All Users</option>
            {userListOptions}
          </select>
        </div>
        <div className="ui-table">
          {expensesList}
        </div>
        {usersArr.length !== 0 && <ExpenseForm receiveExpense={this.props.receiveExpense} users={users} expenses={expenses}/>}
      </section>
    );
  }

}

export default ExpenseTable;
