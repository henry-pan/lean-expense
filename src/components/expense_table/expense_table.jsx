import React from "react";
import ExpenseItem from "../expense_item/expense_item";
import ExpenseForm from "../expense_form/expense_form";

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, expenses, receiveExpense, removeExpense } = this.props;

    const expensesList = expenses.map((expense, i) => {
      return <ExpenseItem expense={expense} key={i}
        receiveExpense={receiveExpense}
        removeExpense={removeExpense}
        users={users} />
    })

    return (
      <div className="table">
        {expensesList}
        {users.length !== 0 && <ExpenseForm receiveExpense={this.props.receiveExpense} users={users}/>}
      </div>
    );
  }

}

export default ExpenseTable;
