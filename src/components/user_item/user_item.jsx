import React from "react";
import UserForm from "../user_form/user_form";

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      hover: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
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
    return totalExpense.toFixed(2);
  }

  render() {
    const {firstName, lastName, budget} = this.props.user;

    let item;
    if (this.state.editing) {
      item = <UserForm receiveUser={this.props.receiveUser} user={this.props.user} closeEdit={this.closeEdit}/>;
    } else {
      item = <>
        <div className="item">
          <div className="item-row">
            <p>{firstName} {lastName}</p>
            <p>${this.calcExpenses()} / ${budget.toFixed(2)}</p>
          </div>
          {this.state.hover &&
            <div className="buttons-container">
              <button onClick={this.handleEdit}>Edit</button>
              <button onClick={this.handleDelete}>Delete</button>
            </div>
          }
        </div>
      </>;
    }

    return (
      <div className="item-container"  onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        {item}
      </div>
    );
  }

}

export default UserItem;
