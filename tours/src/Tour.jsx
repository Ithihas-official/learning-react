import { useState } from "react";

const Tour = (tour) => {
  const { id, image, name, info, price, removeTour } = tour;

  const [readmore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-ifo">
        <h5>{name}</h5>
        <p>
          {readmore ? info : `${info.substring(0, 150)}...  `}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readmore)}
          >
            {readmore ? " read less" : " read more"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
