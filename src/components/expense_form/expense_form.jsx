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
        errors: []
      };
    } else {
      this.state = {
        id: new Date().getTime(),
        userId: 0,
        category: "",
        cost: 0,
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
    if (!userId) newErrors.push("Please select a user!");
    if (!category) newErrors.push("Please select a category!");
    if (isNaN(cost)) newErrors.push("Cost must be numerical!");
    if (!date) newErrors.push("Please enter a date!");
    if (newErrors.length === 0) {
      this.props.receiveExpense({ id, userId, category, cost, date });
      // Reset component after submitting.
      this.setState({ 
        id: new Date().getTime(),
        userId: 0,
        category: "",
        cost: 0,
        date: "",
        errors: [] });
        if (this.props.expense) this.props.closeEdit();
    } else {
      this.setState({ errors: newErrors });
    }
  }

  handleInput(key, e) {
    let value = e.target.value;
    if (key === "cost") value = parseInt(value);
    
    this.setState({ [key]: value });
  }

  render() {
    const {name, userId, category, cost, date, errors} = this.state;
    const mode = this.props.expense ? "Edit" : "Add";

    let userList;
    if (this.props.users) {
      userList = this.props.users.map(user => <option value={user.id} key={user.id}>{`${user.firstName} ${user.lastName}`}</option>);
    }

    const categories = ["Food", "Travel", "Health", "Supplies"].map(cat => <option value={cat} key={cat}>{cat}</option>);

    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
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
          <button>{mode} Expense</button>
          {errors}
        </form>
      </div>
    );
  }

}

export default ExpenseForm;
