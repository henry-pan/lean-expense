import React from "react";
import Item from "./item";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="table">
        <Item />
      </div>
    );
  }

}

export default Table;
