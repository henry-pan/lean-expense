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
    const {userId, category, cost, date} = this.props.expense;
    const {users} = this.props;
    const usersArr = Object.values(users);

    if (!users[userId]) return null;

    return (
      <div className="item">
        <p>{`${users[userId].firstName} ${users[userId].lastName}`}</p> <p>{category}</p> <p>${cost}</p> <p>{date}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => this.props.removeExpense(this.props.expense)}>Delete</button>
        {this.state.editing && 
        <ExpenseForm receiveExpense={this.props.receiveExpense}
          expense={this.props.expense}
          closeEdit={this.closeEdit}
          users={usersArr}/>}
      </div>
    );
  }

}

export default ExpenseItem;
