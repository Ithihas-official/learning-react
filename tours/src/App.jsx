import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [errorFetching, setErrorFetching] = useState(false);
  const fetchTour = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tourData = await resp.json();

      console.log(tourData);
      resp.status !== 404 ? setTours(tourData) : setErrorFetching(true);
    } catch (err) {
      console.log(err);
      setErrorFetching(true);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (errorFetching) {
    return (
      <main>
        <button
          className="btn"
          onClick={() => fetchTour() && setErrorFetching(false)}
        >
          Error in loading, click Here to try again
        </button>
      </main>
    );
  }

  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            className="btn"
            type="button"
            style={{ marginTop: "2rem" }}
            onClick={() => fetchTour()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
