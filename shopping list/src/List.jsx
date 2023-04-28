import React from "react";
import SingleItem from "./SingleItem";

const List = ({ items, deleteItem, toggleComplete }) => {
  console.log(items);
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </div>
  );
};

export default List;
