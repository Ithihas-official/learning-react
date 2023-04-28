import React from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = React.useState("");
  const [number, setNumber] = React.useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    return addColor({ color: color, number: number });
  };
  return (
    <section className="container">
      <h4>shade generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          style={{
            outline: "none",
            minWidth: "60px",
            border: "0px",
            padding: "5px",
          }}
        />
        <input
          type="text"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#000000"
          style={{ minWidth: "140px" }}
        />
        <label
          htmlFor="increment"
          name="increment"
          style={{
            Width: "100px",
            textAlign: "center",
            padding: "5px",
            margin: "auto 0",
          }}
        >
          increment
        </label>
        <input
          type="number"
          name="increment"
          value={number}
          min="1"
          max="100"
          placeholder="10"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          style={{
            width: "50px",
            border: "0px",
            outline: "none",
            margin: "auto 10px",
          }}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          generate
        </button>
      </form>
    </section>
  );
};

export default Form;
