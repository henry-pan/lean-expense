import React from "react";
import UserItem from "../user_item/user_item";
import UserForm from "../user_form/user_form";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, receiveUser, removeUser } = this.props;

    const usersList = users.map((user, i) => {
      return <UserItem user={user} key={i}
        receiveUser={receiveUser}
        removeUser={removeUser} />
    })

    return (
      <div className="table">
        {usersList}
        <UserForm receiveUser={this.props.receiveUser}/>
      </div>
    );
  }

}

export default UserTable;
