import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try { 
        setLoading(true);
        const res = await makeRequest.get(url);
        console.log("Response from api " + res.statusText);
        setData(res.data.data);
        console.log(res);
      } catch (err) {
        setError(true);
        console.log();
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
