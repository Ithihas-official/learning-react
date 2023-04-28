import React from "react";
const SingleItem = ({ item, deleteItem, toggleComplete }) => {
  const { name, id, completed } = item;

  return (
    <div key={id} className="single-item">
      <input
        type="checkbox"
        name="completed"
        id={id}
        onChange={() => toggleComplete(id)}
        checked={completed}
      />
      <p
        style={{
          textDecorationLine: completed ? "line-through" : "none",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
