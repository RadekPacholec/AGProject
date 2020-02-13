import React from "react";
import Item from "./Item";
import "./ItemList.css";

const ItemsList = props => {
  const isChecked = props.isChecked;
  let itemList = props.items.map(item => {
    return (
      <Item
        key={item.id}
        id={item.id}
        groupName={item.groupName}
        quantity={item.quantity}
        type={item.type}
        activity={item.activity}
        auctions={isChecked ? item.auctions : ""}
      />
    );
  });
  return (
    <ul className="itemsList">
      <Item
        id="LP"
        quantity="ILOŚĆ"
        groupName="NAZWA GRUPY"
        type="RODZAJ"
        activity="AKRTYWNOŚĆ"
        auctions={isChecked ? "PRZYPISANE AUKCJE" : ""}
      />
      {itemList}
    </ul>
  );
};
// id: 4,
//         quantity: 75,
//         groupName: "Grupa4",
//         type: "Konto",
//         activity: true
export default ItemsList;
