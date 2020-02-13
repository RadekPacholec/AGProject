import React, { Component } from "react";
import ItemsList from "./ItemsList";
import "./List.css";
class List extends Component {
  state = {
    isChecked: false,
    items: [
      {
        id: 1,
        quantity: 120,
        groupName: "Grupa1",
        type: "Konto",
        auctions: ["123-dawd432343rawd,", "  12dadawd"],
        activity: "TAK"
      },
      {
        id: 2,
        quantity: 430,
        groupName: "Grupa2",
        type: "Konto",
        auctions: ["123-dawd432343rawd, ", "12dawdawg"],
        activity: "TAK"
      },
      {
        id: 3,
        quantity: 660,
        groupName: "Grupa3",
        type: "Konto",
        auctions: ["12dad4453423d", "12dawdawg"],
        activity: "TAK"
      },
      {
        id: 4,
        quantity: 75,
        groupName: "Grupa4",
        type: "Konto",
        auctions: ["123-dawd432343rawd", "12dawdawg"],
        activity: "TAK"
      },
      {
        id: 5,
        quantity: 1233,
        groupName: "Grupa5",
        type: "Konto",
        auctions: ["123-dawd432343rawd", "12dawdawg"],
        activity: "TAK"
      }
    ]
  };

  changeHandler = e => {
    this.setState({
      isChecked: e.target.checked
    });
  };
  render() {
    return (
      <>
        <div className="center">
          <input
            type="checkbox"
            id="check"
            name="active"
            checked={this.state.isChecked}
            onChange={this.changeHandler}
          />
        </div>
        <ItemsList items={this.state.items} isChecked={this.state.isChecked} />
      </>
    );
  }
}

export default List;
