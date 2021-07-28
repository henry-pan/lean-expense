import React from "react";
import UserItem from "../user_item/user_item";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
  }

  mapUsers(arr) {
    return arr.map(i =>
      <UserItem user={this.props.users[i]} userId={i} key={i} />
    );
  }

  render() {
    const { users } = this.props;
    let items;
    if (users) items = this.mapUsers(Object.keys(users));

    const usersList = this.props.users

    return (
      <div className="table">
        {items}
      </div>
    );
  }

}

export default UserTable;
