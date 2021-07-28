import React from "react";
import ExpenseItem from "../expense_item/expense_item";
import ExpenseForm from "../expense_form/expense_form";

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { expenses, receiveExpense, removeExpense } = this.props;

    const expensesList = expenses.map((expense, i) => {
      return <ExpenseItem expense={expense} key={i}
        receiveExpense={receiveExpense}
        removeExpense={removeExpense} />
    })

    return (
      <div className="table">
        {expensesList}
        <ExpenseForm receiveExpense={this.props.receiveExpense}/>
      </div>
    );
  }

}

export default ExpenseTable;
