import { useState } from "react";
import axios, { AxiosError } from "axios";

function useHandleData<T>() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const handleData = async (
    url: string,
    method: "POST" | "PUT" | "DELETE",
    data: T
  ) => {
    setIsLoading(true);
    try {
      const response = await axios({ url, method, data });
      setIsLoading(false);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  return { handleData, isLoading, error };
}

export default useHandleData;
