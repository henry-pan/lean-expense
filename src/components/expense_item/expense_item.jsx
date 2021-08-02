import React from "react";
import ExpenseForm from "../expense_form/expense_form";

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      showOptions: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }


  handleClick() {
    this.setState({ showOptions: !this.state.showOptions });
  }


  handleEdit(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }


  closeEdit() {
    this.setState({ editing: false });
  }


  render() {
    const { userId, category, cost, date } = this.props.expense;
    const { users } = this.props;

    if (!users[userId]) return null;

    let item;
    if (this.state.editing) {
      item =
        <ExpenseForm receiveExpense={this.props.receiveExpense}
          expense={this.props.expense}
          closeEdit={this.closeEdit}
          users={users}/>;
    } else {
      item = <>
        <div className="item">
          <div className="item-row">
            <p>{`${users[userId].firstName} ${users[userId].lastName}`}</p>
            <p>{date}</p>
            <p>{category[0].toUpperCase() + category.slice(1)}</p>
            <p>${cost.toFixed(2)}</p>
          </div>
        </div>
        {this.state.showOptions &&
          <div className="buttons-container">
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={() => this.props.removeExpense(this.props.expense)}>Delete</button>
          </div>
        }
      </>;
    }

    return (
      <div className="item-container" onClick={this.handleClick}>
        {item}
      </div>
    );
  }
}

export default ExpenseItem;
