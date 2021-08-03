# LeanExpense

Live: [Click here](https://www.henry-pan.com/lean-expense/)

A simple webapp that helps track expenses for a company.

Enter a user (first/last name) on the users table, then enter expenses (user, category, cost, and date) in the expenses table. The running total is automatically calculated on the company expenses table. Editing or deleting a user/expense will also automatically adjust associated users/expenses.

Users have a set budget that they cannot exceed, and the expenses table has a filter option to only show select expenses.

Built with React + Redux as a 24-hr takehome project.

## Set Up

To run the app locally, clone the repo and open the `index.html` file with a browser.

To rebuild `bundle.js`, run `npm install` and then run `npm start` to start webpack.
