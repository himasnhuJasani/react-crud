import React, { useEffect, useState } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(true);

  const API = `http://localhost:3000/${endpoint}`;
  useEffect(() => {
    setIsLoading(true);
    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setData(resData);
        setIsLoading(false);
        setRefresh(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [endpoint, refresh]);

  return { data, isLoading, error, setRefresh };
};

export default useFetch;
