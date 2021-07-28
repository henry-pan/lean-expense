import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {firstName, lastName} = this.props.user;
    return (
      <div className="item">
        <p>{firstName} {lastName}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }

}

export default Item;
