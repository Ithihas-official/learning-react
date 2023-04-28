import React, { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#000000").all(10));

  const addColor = ({ number, color }) => {
    let num;
    if (number >= 1 && number <= 100) {
      num = Math.ceil(number);
    } else {
      toast.error(`The number ${num} is not valid`);
    }
    try {
      console.log(`inside ${num}`);

      const newColor = new Values(color).all(num);
      setColors(newColor);
    } catch (error) {
      toast.error(`The color ${color} is not valid`);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer
        position="top-right"
        autoclose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
};
export default App;
