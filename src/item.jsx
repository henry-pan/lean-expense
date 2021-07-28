import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Hello",
      lastName: "World",
      expenses: 0
    }
  }

  handleInput() {

  }

  render() {
    const {firstName, lastName, expenses} = this.state;
    return (
      <div className="item">
        <p>{firstName} {lastName}</p>
        <p>Total: {expenses}</p>
        <input type="text" />
      </div>
    );
  }

}

export default Item;
