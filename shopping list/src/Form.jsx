import React, { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName) {
      toast.success("Item added");
      setNewItemName("");
      return addItem(newItemName);
    } else {
      toast.error("Please add an item");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Shopping List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          style={{
            outline: 'none',
            background: 'lightgray',
          }}

          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
