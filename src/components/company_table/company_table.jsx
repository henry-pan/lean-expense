import React from "react";

class CompanyTable extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const expenseObj = {
      food: 0,
      travel: 0,
      health: 0,
      supplies: 0
    }
    this.props.expenses.forEach(expense => expenseObj[expense.category] += expense.cost);
    const {food, travel, health, supplies} = expenseObj;

    return (
      <section className="company-section">
        <h2>Company Expenses</h2>
        <div className="company-table">
          <h3>Food <span>${food.toFixed(2)}</span></h3>
          <h3>Travel <span>${travel.toFixed(2)}</span></h3>
          <h3>Health <span>${health.toFixed(2)}</span></h3>
          <h3>Supplies <span>${supplies.toFixed(2)}</span></h3>
          <h3>Total <span>${(food + travel + health + supplies).toFixed(2)}</span></h3>
        </div>
      </section>
    );
  }

}

export default CompanyTable;
