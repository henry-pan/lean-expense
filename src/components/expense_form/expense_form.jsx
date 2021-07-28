import React from "react";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    // If editing, prefill the forms.
    if (this.props.expense) {
      this.state = {
        id: this.props.expense.id,
        userId: this.props.expense.userId,
        category: this.props.expense.category,
        cost: this.props.expense.cost,
        date: this.props.expense.date,
        prevId: this.props.expense.userId,
        errors: []
      };
    } else {
      this.state = {
        id: new Date().getTime(),
        userId: 0,
        category: "",
        cost: "",
        date: "",
        errors: []
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {id, userId, category, cost, date} = this.state;
    const newErrors = [];

    const parsedCost = Math.max(0, Math.min(parseFloat(cost).toFixed(2), 9999999999));

    if (!userId) newErrors.push("Please select a user!");
    if (!category) newErrors.push("Please select a category!");
    if (isNaN(parsedCost)) newErrors.push("Cost must be numerical!");
    if (!date) newErrors.push("Please enter a date!");
    if (newErrors.length === 0) {
      if (this.props.expense) {
        const prevId = this.state.prevId;
        this.props.receiveExpense({ id, userId, prevId, category, cost: parsedCost, date });

      } else {
        this.props.receiveExpense({ id, userId, category, cost: parsedCost, date });

      }
      // Reset component after submitting.
      this.setState({ 
        id: new Date().getTime(),
        userId: 0,
        category: "",
        cost: "",
        date: "",
        errors: [] });
        if (this.props.expense) this.props.closeEdit();
    } else {
      this.setState({ errors: newErrors });
    }
  }

  handleInput(key, e) {
    // let value = e.target.value;
    // Parse and clamp cost at 9.9bil
    // if (key === "cost") value = Math.max(0, Math.min(parseFloat(value), 9999999999));
    
    this.setState({ [key]: e.target.value });
  }

  render() {
    const {name, userId, category, cost, date, errors} = this.state;
    const mode = this.props.expense ? "Save" : "Add Expense";

    let userList;
    if (this.props.users) {
      userList = this.props.users.map(user => <option value={user.id} key={user.id}>{`${user.firstName} ${user.lastName}`}</option>);
    }

    const categories = ["Food", "Travel", "Health", "Supplies"].map(cat => <option value={cat} key={cat}>{cat}</option>);

    let buttons;
    if (this.props.expense) {
      buttons = <>
        <button className="btn-alt" onClick={()=>this.props.closeEdit()}>Cancel</button>
        <button>{mode}</button>
      </>;
    } else {
      buttons = <button>{mode}</button>;
    }

    return (
      <div className="expense-form-container">
        <form className="expense-form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <select value={userId} onChange={e=>this.handleInput("userId", e)}>
              <option>Select a user</option>
              {userList}
            </select>
          </label>
          <label>
            Category:
            <select value={category} onChange={e=>this.handleInput("category", e)}>
              <option>Select a category</option>
              {categories}
            </select>
          </label>
          <label>
            Cost:
            <input type="text" onChange={e =>this.handleInput("cost", e)} value={cost} />
          </label>
          <label>
            Date:
            <input type="date" onChange={e =>this.handleInput("date", e)} value={date} />
          </label>
          <div className="buttons-container">{buttons}</div>
          {errors}
        </form>
      </div>
    );
  }

}

export default ExpenseForm;
