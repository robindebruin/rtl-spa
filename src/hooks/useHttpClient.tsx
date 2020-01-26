import React, { useCallback, useState } from 'react';
import HttpClient from '../utils/HttpClients';

/**
 * custom hook for data fetching
 * returns two boleans representing loading
 * and error state. Callback fn accepting custom axios
 * params. On success response will be stores in in response
 * state.
 */

const useHttpClient = () => {
  const [response, setResponse] = useState();
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(!response);

  const fetchData = useCallback(async axiosInstance => {
    try {
      setIsLoading(true);
      const res = await HttpClient.get(axiosInstance);
      setHasError(false);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [response, hasError, isLoading, fetchData];
};

export default useHttpClient;
