import React from "react";
import ExpenseItem from "../expense_item/expense_item";
import ExpenseForm from "../expense_form/expense_form";

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterUser: "",
      filterCategory: ["all"],
      filterDateStart: "",
      filterDateEnd: "",
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  handleCategory(e) {
    this.setState({ filterCategory: Array.from(e.target.selectedOptions, option => option.value )})
  }

  render() {
    const { users, expenses, receiveExpense, removeExpense } = this.props;
    const { filterUser, filterCategory, filterDateStart, filterDateEnd } = this.state;
    const usersArr = Object.values(users);
    const expensesArr = Object.values(expenses);

    const expensesList = expensesArr.map((expense, i) => {
      // Apply filters - don't add to the list unless it passes the filter
      if (filterUser && filterUser != expense.userId) return;
      if (!filterCategory.includes("all") && !filterCategory.includes(expense.category)) return;
      if (filterDateStart && filterDateEnd && !(filterDateStart <= expense.date && filterDateEnd >= expense.date)) return;

      return <ExpenseItem expense={expense} key={i}
        receiveExpense={receiveExpense}
        removeExpense={removeExpense}
        users={users} />
    });

    const userListOptions = usersArr.map(user => <option value={user.id} key={user.id}>{`${user.firstName} ${user.lastName}`}</option>);
    const categoriesOptions = ["food", "travel", "health", "supplies"].map(cat => <option value={cat} key={cat}>{cat[0].toUpperCase() + cat.slice(1)}</option>);

    return (
      <section className="ui-section">
        <h2>Expenses</h2>
        <div className="filter-buttons">
          <select value={filterUser} onChange={e=>this.handleInput("filterUser", e)}>
            <option value="">All Users</option>
            {userListOptions}
          </select>
          <select className="filter-category" multiple={true} value={filterCategory} onChange={this.handleCategory}>
            <option value="all">All Categories</option>
            {categoriesOptions}
          </select>
          <label>
            Start Date:
            <input type="date" value={filterDateStart} onChange={e =>this.handleInput("filterDateStart", e)}/>
          </label>
          <label>
            End Date:
            <input type="date" value={filterDateEnd} onChange={e =>this.handleInput("filterDateEnd", e)}/>
          </label>
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
