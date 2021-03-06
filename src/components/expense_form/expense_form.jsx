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
        prevId: this.props.expense.userId
      };
    } else {
      this.state = {
        id: new Date().getTime(),
        userId: 0,
        category: "",
        cost: "",
        date: ""
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  calcExpenses(user, parsedCost) {
    const expensesArr = [...user.expensesSet];
    let totalExpense = 0;
    expensesArr.forEach(expense => {
      if (expense === this.state.id) return;
      totalExpense += this.props.expenses[expense].cost;
    });
    totalExpense += parsedCost;
    return totalExpense.toFixed(2);
  }


  handleValidations() {
    const {userId, category, cost, date} = this.state;
    const parsedCost = Math.max(0, Math.min(parseFloat(cost).toFixed(2), 9999999999));
    const errors = [];

    // Check all input fields for existence.
    if (!userId) errors.push("Please select a user.");
    if (!category) errors.push("Please select a category.");
    if (isNaN(parsedCost)) errors.push("Please enter a cost.");
    if (!date) errors.push("Please enter a date.");
    if (errors.length !== 0) {
      alert(errors.join("\n"));
      return false;
    }

    // Check if expense exceeds user's budget.
    const user = this.props.users[userId];
    const totalCost = this.calcExpenses(user, parsedCost);
    if (user.budget < totalCost) {
      alert("This expense exceeds this user's budget!");
      return false;
    }

    // All validations passed.
    return true;
  }


  handleSubmit(e) {
    e.preventDefault();
    const {id, userId, category, cost, date} = this.state;
    const parsedCost = Math.max(0, Math.min(parseFloat(cost).toFixed(2), 9999999999));
    if (!this.handleValidations()) return;

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
      date: "" });

    if (this.props.expense) this.props.closeEdit();
  }


  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }


  render() {
    const {userId, category, cost, date} = this.state;
    const mode = this.props.expense ? "Save" : "Add Expense";

    let userList;
    if (this.props.users) {
      userList = Object.values(this.props.users).map(user => <option value={user.id} key={user.id}>{`${user.firstName} ${user.lastName}`}</option>);
    }

    const categories = ["food", "travel", "health", "supplies"].map(cat => <option value={cat} key={cat}>{cat[0].toUpperCase() + cat.slice(1)}</option>);

    let buttons;
    if (this.props.expense) {
      buttons = <>
        <button className="btn-alt" onClick={()=>this.props.closeEdit()}>Cancel</button>
        <button type="submit">{mode}</button>
      </>;
    } else {
      buttons = <button type="submit">{mode}</button>;
    }

    return (
      <div className="expense-form-container">
        <form className="expense-form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <select value={userId} onChange={e=>this.handleInput("userId", e)}>
              <option value="">Select a user</option>
              {userList}
            </select>
          </label>
          <label>
            Category:
            <select value={category} onChange={e=>this.handleInput("category", e)}>
              <option value="">Select a category</option>
              {categories}
            </select>
          </label>
          <label>
            Cost:
            <input type="number" onChange={e =>this.handleInput("cost", e)} value={cost} step="any" />
          </label>
          <label>
            Date:
            <input type="date" onChange={e =>this.handleInput("date", e)} value={date} />
          </label>
          <div className="buttons-container">{buttons}</div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
