import React from "react";

const Item = props => {
  return (
    <li>
      <span className="id item">{props.id}</span>
      <span className="quantity item">{props.quantity}</span>
      <span className="groupName item">{props.groupName}</span>
      <span className="item">{props.auctions}</span>
      <span className="type item">{props.type}</span>
      <span className="activity item">{props.activity}</span>
    </li>
  );
};

export default Item;
