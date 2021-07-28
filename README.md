# LeanExpense

Live: [Click here](https://www.henry-pan.com/lean-expense/)

A simple webapp that helps track expenses for a company.

Enter a user (first/last name) on the users table, then enter expenses (user, category, cost, and date) in the expenses table. The running total is automatically calculated on the company expenses table. Editing or deleting a user/expense will also automatically adjust associated users/expenses.

Built with React+Redux as a 24-hr takehome project.

## Set Up

Clone the repo and open the `index.html` file to run the app.

To rebuild `bundle.js`, run `npm install` and then run `npm start` to start webpack.

## Future Features

Features I'll add in the future because I was out of time.

* Adjust the layout to better display expense information. (Bigger tables for users/expenses.)

* Set a budget for a user, which prevents adding or editing expenses such that it would exceed that user's budget.

* Filters to filter expenses by: user, date range, category.
