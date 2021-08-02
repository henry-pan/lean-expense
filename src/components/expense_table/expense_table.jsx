import React, { useState } from "react";
import ExpenseItem from "../expense_item/expense_item";
import ExpenseForm from "../expense_form/expense_form";

export default function ExpenseTable(props) {
  const [filterUser, setFilterUser] = useState("");
  const [filterCategory, setFilterCategory] = useState(["all"]);
  const [filterDateStart, setFilterDateStart] = useState("");
  const [filterDateEnd, setFilterDateEnd] = useState("");
  const [showFilters, toggleFilters] = useState(false);

  const { users, expenses, receiveExpense, removeExpense } = props;
  const usersArr = Object.values(users);
  const expensesArr = Object.values(expenses);

  const userListOptions = usersArr.map(user => <option value={user.id} key={user.id}>{`${user.firstName} ${user.lastName}`}</option>);
  const categoriesOptions = ["food", "travel", "health", "supplies"].map(cat => <option value={cat} key={cat}>{cat[0].toUpperCase() + cat.slice(1)}</option>);

  const expensesList = expensesArr.map((expense, i) => {
    // Apply filters - don't add to the list unless it passes the filter
    if (filterUser && filterUser != expense.userId) return;
    if (!filterCategory.includes("all") && !filterCategory.includes(expense.category)) return;
    if (filterDateStart && !(filterDateStart <= expense.date)) return;
    if (filterDateEnd && !(filterDateEnd >= expense.date)) return;

    return <ExpenseItem expense={expense} key={i}
      receiveExpense={receiveExpense}
      removeExpense={removeExpense}
      users={users}
      expenses={expenses} />
  });

  return (
    <section className="ui-section">
      <div className="expenses-header">
        <h2>Expenses</h2>
        <button onClick={() => toggleFilters(!showFilters)}>{showFilters ? "Hide" : "Show"} Filters</button>
      </div>
      {showFilters &&
        <div className="filter-box">
          <h2>Filter By</h2>
          <div className="filter-options">
            <select value={filterUser} onChange={e => setFilterUser(e.target.value)}>
              <option value="">All Users</option>
              {userListOptions}
            </select>
            <select className="filter-category" multiple={true} value={filterCategory}
              onChange={e => setFilterCategory(Array.from(e.target.selectedOptions, option => option.value))}>
              <option value="all">All Categories</option>
              {categoriesOptions}
            </select>
            <div className="filter-date">
              <label>
                Start Date:
                <input type="date" value={filterDateStart} onChange={e => setFilterDateStart(e.target.value)}/>
              </label>
              <label>
                End Date:
                <input type="date" value={filterDateEnd} onChange={e => setFilterDateEnd(e.target.value)}/>
              </label>
            </div>
          </div>
        </div>
      }
      <div className="ui-table">
        {expensesList}
      </div>
      {usersArr.length !== 0 && <ExpenseForm receiveExpense={receiveExpense} users={users} expenses={expenses}/>}
    </section>
  );
}
