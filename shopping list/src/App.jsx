import React, { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import { toast, ToastContainer } from "react-toastify";
import List from "./List";

const localStorageList = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const defaultItems = JSON.parse(localStorage.getItem("list")) || [];
  const [items, setItems] = useState(defaultItems);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    localStorageList(newItems);
  };

  const deleteItem = (id) => {
    toast.success("Item deleted");
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorageList(newItems);
  };

  const toggleComplete = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    localStorageList(newItems);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <List
        items={items}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
      <ToastContainer
        position="top-right"
        theme="light"
        hideProgressBar={true}
        newestOnTop={true}
        pauseOnHover={true}
        timeOut={2000}
      />
    </section>
  );
};

export default App;
