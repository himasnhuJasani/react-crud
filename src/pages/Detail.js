import React from 'react';
import { useLocation, useParams, useRoutes } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Detail = () => {
  const location = useLocation();
  const { data, isLoading, error } = useFetch(location.pathname.replace('/', ''));
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something Went Wrong</div>;
  return (
    <ul>
      <li>id: {data.id}</li>
      <li>Name: {data.name}</li>
      <li>Age: {data.age}</li>
      <li>Designation: {data.designation}</li>
    </ul>
  );
};

export default Detail;
