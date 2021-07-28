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
      <div className="table">
        <h3>Food ${Food}</h3>
        <h3>Travel ${Travel}</h3>
        <h3>Health ${Health}</h3>
        <h3>Supplies ${Supplies}</h3>
        <h3>Total ${Food + Travel + Health + Supplies}</h3>
      </div>
    );
  }

}

export default CompanyTable;
