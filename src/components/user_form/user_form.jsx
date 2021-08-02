import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    // If editing, prefill the forms.
    if (this.props.user) {
      this.state = {
        id: this.props.user.id,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        budget: this.props.user.budget,
        expensesSet: this.props.user.expensesSet
      };
    } else {
      this.state = {
        id: new Date().getTime(),
        firstName: "",
        lastName: "",
        budget: "",
        expensesSet: new Set()
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {id, firstName, lastName, budget, expensesSet} = this.state;

    const parsedBudget = Math.max(0, Math.min(parseFloat(budget).toFixed(2), 9999999999));

    // Validations
    const errors = [];
    if (!firstName) errors.push("Please enter a first name.");
    if (!lastName) errors.push("Please enter a last name.");
    if (isNaN(parsedBudget)) errors.push("Please enter a total budget.");
    if (errors.length !== 0) {
      alert(errors.join("\n"));
      return;
    }

    this.props.receiveUser({ id, firstName, lastName, budget: parsedBudget, expensesSet });
    // Reset component after submitting.
    this.setState({ 
      id: new Date().getTime(),
      firstName: "",
      lastName: "",
      budget: "",
      expensesSet: new Set() });
    
    if (this.props.user) this.props.closeEdit();
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const {firstName, lastName, budget} = this.state;
    const mode = this.props.user ? "Save" : "Add User";

    let buttons;
    if (this.props.user) {
      buttons = <>
        <button className="btn-alt" onClick={()=>this.props.closeEdit()}>Cancel</button>
        <button>{mode}</button>
      </>;
    } else {
      buttons = <button>{mode}</button>;
    }

    return (
      <div className="user-form-container">
        <form className="user-form" onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" onChange={e =>this.handleInput("firstName", e)} value={firstName} placeholder="First Name" />
          </label>
          <label>
            Last Name:
            <input type= "text" onChange={e =>this.handleInput("lastName", e)} value={lastName} placeholder="Last Name" />
          </label>
          <label>
            Total Budget:
            <input type= "number" onChange={e =>this.handleInput("budget", e)} value={budget} placeholder="Total Budget" />
          </label>
          <div className="buttons-container">{buttons}</div>
        </form>
      </div>
    );
  }

}

export default UserForm;
