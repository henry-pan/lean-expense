import React from "react";
import UserForm from "../user_form/user_form";

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({editing: true});
  }

  render() {
    const {firstName, lastName} = this.props.user;
    return (
      <div className="item">
        <p>{firstName} {lastName}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => this.props.removeUser(this.props.user)}>Delete</button>
        {this.state.editing && 
        <UserForm receiveUser={this.props.receiveUser} user={this.props.user} />}
      </div>
    );
  }

}

export default UserItem;
