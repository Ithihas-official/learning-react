import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestions = ({ info, title }) => {
  const [showinfo, setShowinfo] = React.useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn" onClick={() => setShowinfo(!showinfo)} >{showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      <p>  {showinfo && info}</p>
    </article>
  );
};

export default SingleQuestions;
