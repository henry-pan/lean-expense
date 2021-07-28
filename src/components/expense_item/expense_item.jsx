import React from "react";
import ExpenseForm from "../expense_form/expense_form";

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({editing: true});
  }

  closeEdit() {
    this.setState({editing: false});
  }

  render() {
    const {name, category, cost, date} = this.props.expense;
    return (
      <div className="item">
        <p>{name}</p> <p>{category}</p> <p>${cost}</p> <p>{date}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => this.props.removeExpense(this.props.expense)}>Delete</button>
        {this.state.editing && 
        <ExpenseForm receiveExpense={this.props.receiveExpense}
          expense={this.props.expense}
          closeEdit={this.closeEdit}
          users={this.props.users}/>}
      </div>
    );
  }

}

export default ExpenseItem;
