import React from "react";
import UserItem from "../user_item/user_item";
import UserForm from "../user_form/user_form";

export default function UserTable(props) {
  const { users, expenses, receiveUser, removeUser, removeExpense } = props;

  const usersList = users.map((user, i) => {
    return <UserItem user={user} key={i}
      receiveUser={receiveUser}
      removeUser={removeUser}
      expenses={expenses}
      removeExpense={removeExpense} />
  });

  return (
    <section className="ui-section">
      <h2>Users</h2>
      <div className="ui-table">
        {usersList}
      </div>
      <UserForm receiveUser={receiveUser}/>
    </section>
  );
}
