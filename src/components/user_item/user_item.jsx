import React, { useState } from "react";
import UserForm from "../user_form/user_form";

export default function UserItem(props) {
  const [isEditing, setEditing] = useState(false);
  const [showOptions, toggleOptions] = useState(false);

  const { user, expenses, receiveUser, removeUser, removeExpense } = props;
  const { firstName, lastName, budget, expensesSet } = user;

  const closeEdit = () => setEditing(false);


  const handleDelete = () => {
    const expensesArr = [...expensesSet];
    expensesArr.forEach(expense => removeExpense(expenses[expense]));
    removeUser(user);
  };


  const calcExpenses = () => {
    const expensesArr = [...expensesSet];
    let totalExpense = 0;
    expensesArr.forEach(expense => {
      if (!expenses[expense]) return;
      totalExpense += expenses[expense].cost;
    });
    return totalExpense.toFixed(2);
  };


  let item;
  if (isEditing) {
    item =
      <UserForm receiveUser={receiveUser}
        user={user}
        expenses={expenses}
        closeEdit={closeEdit}/>;
  } else {
    item = <>
      <div className="item">
        <div className="item-row">
          <p>{firstName} {lastName}</p>
          <p>${calcExpenses()} / ${budget.toFixed(2)}</p>
        </div>
      </div>
      {showOptions &&
        <div className="buttons-container">
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      }
    </>;
  }

  return (
    <div className="item-container" onClick={() => toggleOptions(!showOptions)}>
      {item}
    </div>
  );
}
