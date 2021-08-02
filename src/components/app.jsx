import React, { useState } from "react";
import UserTableContainer from "./user_table/user_table_container";
import ExpenseTableContainer from "./expense_table/expense_table_container";
import CompanyTableContainer from "./company_table/company_table_container";

export default function App() {
  const [currentTab, setCurrentTab] = useState("user");

  return (
    <>
      <header>
        <nav>
          <h1>LeanExpense</h1>
          <button onClick={() => setCurrentTab("user")}>Users</button>
          <button onClick={() => setCurrentTab("expense")}>Expenses</button>
        </nav>
      </header>
      <div className="content">
        {currentTab === "user" ? <UserTableContainer /> : <ExpenseTableContainer />}
        <CompanyTableContainer />
      </div>
    </>
  );
}
