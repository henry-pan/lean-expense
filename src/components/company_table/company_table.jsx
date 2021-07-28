import React from "react";

class CompanyTable extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const expenseObj = {
      Food: 0,
      Travel: 0,
      Health: 0,
      Supplies: 0
    }
    this.props.expenses.forEach(expense => expenseObj[expense.category] += expense.cost);
    const {Food, Travel, Health, Supplies} = expenseObj;

    return (
      <div className="company-table">
        <h3>Food <span>${Food.toFixed(2)}</span></h3>
        <h3>Travel <span>${Travel.toFixed(2)}</span></h3>
        <h3>Health <span>${Health.toFixed(2)}</span></h3>
        <h3>Supplies <span>${Supplies.toFixed(2)}</span></h3>
        <h3>Total <span>${(Food + Travel + Health + Supplies).toFixed(2)}</span></h3>
      </div>
    );
  }

}

export default CompanyTable;
