import { useState, useEffect } from "react";
import { baseURL } from "./constants";

export default function useFetch(url, options) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await fetch(`${baseURL}${url}`, {
          ...options,
        });
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { response, error, loading };
}
