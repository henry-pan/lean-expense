import React from "react";
import ExpenseItem from "../expense_item/expense_item";
import ExpenseForm from "../expense_form/expense_form";

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, expenses, receiveExpense, removeExpense } = this.props;
    const usersArr = Object.values(users);
    const expensesArr = Object.values(expenses);

    const expensesList = expensesArr.map((expense, i) => {
      return <ExpenseItem expense={expense} key={i}
        receiveExpense={receiveExpense}
        removeExpense={removeExpense}
        users={users} />
    });

    return (
      <section className="ui-section">
        <h2>Expenses</h2>
        <div className="ui-table">
          {expensesList}
        </div>
        {usersArr.length !== 0 && <ExpenseForm receiveExpense={this.props.receiveExpense} users={users} expenses={expenses}/>}
      </section>
    );
  }

}

export default ExpenseTable;
