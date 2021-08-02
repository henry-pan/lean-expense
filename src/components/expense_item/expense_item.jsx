import React, { useState } from "react";
import ExpenseForm from "../expense_form/expense_form";

export default function ExpenseItem(props) {
  const [isEditing, setEditing] = useState(false);
  const [showOptions, toggleOptions] = useState(false);

  const { users, expense, receiveExpense, removeExpense } = props;
  const { userId, category, cost, date } = expense;
  if (!users[userId]) return null;

  const closeEdit = () => setEditing(false);

  
  let item;
  if (isEditing) {
    item =
      <ExpenseForm receiveExpense={receiveExpense}
        expense={expense}
        closeEdit={closeEdit}
        users={users}/>;
  } else {
    item = <>
      <div className="item">
        <div className="item-row">
          <p>{`${users[userId].firstName} ${users[userId].lastName}`}</p>
          <p>{date}</p>
          <p>{category[0].toUpperCase() + category.slice(1)}</p>
          <p>${cost.toFixed(2)}</p>
        </div>
      </div>
      {showOptions &&
        <div className="buttons-container">
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => removeExpense(expense)}>Delete</button>
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
