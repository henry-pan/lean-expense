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
        errors: []
      };
    } else {
      this.state = {
        id: new Date().getTime(),
        firstName: "",
        lastName: "",
        errors: []
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {id, firstName, lastName} = this.state;
    const newErrors = [];
    if (!firstName) newErrors.push("First name cannot be empty!");
    if (!lastName) newErrors.push("Last name cannot be empty!");
    if (newErrors.length === 0) {
      this.props.receiveUser({ id, firstName, lastName });
      // Reset component after submitting.
      this.setState({ id: new Date().getTime(), firstName: "", lastName: "", errors: [] });
    } else {
      this.setState({ errors: newErrors });
    }
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const {firstName, lastName, errors} = this.state;
    const mode = this.props.user ? "Edit" : "Add";

    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" onChange={e =>this.handleInput("firstName", e)} value={firstName} />
          </label>
          <label>
            Last Name:
            <input type= "text" onChange={e =>this.handleInput("lastName", e)} value={lastName} />
          </label>
          <button>{mode} User</button>
          {errors}
        </form>
      </div>
    );
  }

}

export default UserForm;
