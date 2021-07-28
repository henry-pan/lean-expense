import React from "react";
import Item from "./components/user_item/item";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  mapUsers(arr) {
    return arr.map(i =>
      <Item user={this.props.users[i]} userId={i} key={i} />
    );
  }

  render() {
    const { users } = this.props;
    let items;
    if (users) items = this.mapUsers(Object.keys(users));

    return (
      <div className="table">
        {items}
      </div>
    );
  }

}

export default Table;
