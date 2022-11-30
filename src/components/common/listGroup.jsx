import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, onItemSelect, selectedItem, textProperty, valueProperty } =
    props;
  //console.log("textProperty :", textProperty);
  return (
    <ul class="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? "list-group-item active"
              : "list-group-item "
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
