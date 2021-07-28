import React from "react";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    // If editing, prefill the forms.
    if (this.props.expense) {
      this.state = {
        id: this.props.expense.id,
        name: this.props.expense.name,
        category: this.props.expense.category,
        cost: this.props.expense.cost,
        date: this.props.expense.date,
        errors: []
      };
    } else {
      this.state = {
        id: new Date().getTime(),
        name: "",
        category: "food",
        cost: 0,
        date: "",
        errors: []
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {id, name, category, cost, date} = this.state;
    const newErrors = [];
    if (!name) newErrors.push("Name cannot be empty!");
    if (!date) newErrors.push("Please enter a date!");
    if (newErrors.length === 0) {
      this.props.receiveExpense({ id, name, category, cost, date });
      // Reset component after submitting.
      this.setState({ 
        id: new Date().getTime(),
        name: "",
        category: "food",
        cost: 0,
        date: "",
        errors: [] });
        if (this.props.expense) this.props.closeEdit();
    } else {
      this.setState({ errors: newErrors });
    }
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const {name, category, cost, date, errors} = this.state;
    const mode = this.props.expense ? "Edit" : "Add";

    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={e =>this.handleInput("name", e)} value={name} />
          </label>
          <label>
            Category:
            <select value={category} onChange={e=>this.handleInput("category", e)}>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="health">Health</option>
              <option value="supplies">Supplies</option>
            </select>
          </label>
          <label>
            Cost:
            <input type="text" onChange={e =>this.handleInput("cost", e)} value={cost} />
          </label>
          <label>
            Date:
            <input type="text" onChange={e =>this.handleInput("date", e)} value={date} />
          </label>
          <button>{mode} Expense</button>
          {errors}
        </form>
      </div>
    );
  }

}

export default ExpenseForm;
