import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const fn_data = await response.json();
      if (!response.ok) {
        setIsError(true);
        setIsloading(false);
      }
      setData(fn_data);
    } catch (err) {
      setIsError(true);
      setIsloading(false);
    }
  };

  return { isloading, isError, data };
};

export default useEffect;
