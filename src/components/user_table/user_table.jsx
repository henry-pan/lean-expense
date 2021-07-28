import React from "react";
import UserItem from "../user_item/user_item";
import UserForm from "../user_form/user_form";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, expenses, receiveUser, removeUser, removeExpense } = this.props;

    const usersList = users.map((user, i) => {
      return <UserItem user={user} key={i}
        receiveUser={receiveUser}
        removeUser={removeUser}
        expenses={expenses}
        removeExpense={removeExpense} />
    });

    return (
      <section className="users-section">
        <h2>Users</h2>
        <div className="users-table">
          {usersList}
        </div>
        <UserForm receiveUser={this.props.receiveUser}/>
      </section>
    );
  }

}

export default UserTable;
