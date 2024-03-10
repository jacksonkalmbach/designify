import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        const error = err as Error;
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
