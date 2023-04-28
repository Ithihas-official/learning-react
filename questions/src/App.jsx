import React from "react";
import Questions from "./Questions.jsx";
import data from "./data.js";
import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
