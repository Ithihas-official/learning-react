import { useState } from "react";
import people from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex((currentIndex) => {
      if (currentIndex == 0) {
        const newIndex = Object.keys(people).length - 1;
        return newIndex;
      }
      return currentIndex - 1;
    });
  };
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const finalIndex = Object.keys(people).length - 1;
      console.log(finalIndex);
      if (currentIndex == finalIndex) {
        return 0;
      }
      return currentIndex + 1;
    });
  };

  function randomNum() {
    return Math.floor(Math.random() * Object.keys(people).length);
  }

  const randomPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = randomNum();
      if (currentIndex == newIndex) {
        randomPerson();
      }
      return newIndex;
    });
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" type="button" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" type="button" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          type="button"
          onClick={randomPerson}
        >
          Random Person
        </button>
      </article>
    </main>
  );
};

export default App;
