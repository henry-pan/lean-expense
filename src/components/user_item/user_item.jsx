import React from "react";

class UserItem extends React.Component {
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

export default UserItem;
