import React, { useEffect, useState } from 'react';

const useCreate = () => {
  const [item, setCreate] = useState(null);
  console.log(item);
  useEffect(() => {
    if (item) {
      const API = `http://localhost:3000/employee`;
      fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
        .then((response) => {
          return response.json();
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [item]);

  return { setCreate };
};

export default useCreate;
