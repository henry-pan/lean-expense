import React from "react";
import UserForm from "../user_form/user_form";

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({editing: true});
  }

  handleDelete(e) {
    e.preventDefault();
    const expensesArr = [...this.props.user.expensesSet];
    expensesArr.forEach(expense => this.props.removeExpense(this.props.expenses[expense]));
    this.props.removeUser(this.props.user);
  }

  closeEdit() {
    this.setState({editing: false});
  }

  calcExpenses() {
    const expensesArr = [...this.props.user.expensesSet];
    let totalExpense = 0;
    expensesArr.forEach(expense => {
      if (!this.props.expenses[expense]) return;
      totalExpense += this.props.expenses[expense].cost;
    })
    return totalExpense;
  }

  render() {
    const {firstName, lastName} = this.props.user;
    return (
      <div className="item">
        <p>{firstName} {lastName}</p>
        <p>Total Expenses: ${this.calcExpenses()}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.editing && 
        <UserForm receiveUser={this.props.receiveUser} user={this.props.user} closeEdit={this.closeEdit}/>}
      </div>
    );
  }

}

export default UserItem;
