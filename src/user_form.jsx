import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    // If editing, prefill the forms.
    if (this.props.user) {
      this.state = {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName
      };
    } else {
      this.state = {
        firstName: "",
        lastName: ""
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addUser(this.state);

    // Clear the form after submitting.
    this.setState({ firstName: "", lastName: "" });
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const {firstName, lastName} = this.state;
    const mode = this.props.user ? "Edit" : "Add";

    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" onChange={e =>this.handleInput("firstName", e)} value={this.state.firstName} />
          </label>
          <label>
            Last Name:
            <input type= "text" onChange={e =>this.handleInput("lastName", e)} value={this.state.lastName} />
          </label>
          <button>{mode} User</button>
        </form>
      </div>
    );
  }

}

export default UserForm;
