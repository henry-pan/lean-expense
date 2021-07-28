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
        expensesSet: this.props.user.expensesSet,
        errors: []
      };
    } else {
      this.state = {
        id: new Date().getTime(),
        firstName: "",
        lastName: "",
        expensesSet: new Set(),
        errors: []
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {id, firstName, lastName, expensesSet} = this.state;
    const newErrors = [];
    if (!firstName) newErrors.push("First name cannot be empty!");
    if (!lastName) newErrors.push("Last name cannot be empty!");
    if (newErrors.length === 0) {
      this.props.receiveUser({ id, firstName, lastName, expensesSet });
      // Reset component after submitting.
      this.setState({ 
        id: new Date().getTime(),
        firstName: "",
        lastName: "", 
        expensesSet: new Set(),
        errors: [] });
      if (this.props.user) this.props.closeEdit();
    } else {
      this.setState({ errors: newErrors });
    }
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const {firstName, lastName, errors} = this.state;
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
          <div className="buttons-container">{buttons}</div>
          {errors}
        </form>
      </div>
    );
  }

}

export default UserForm;
