import React, { useEffect, useState } from 'react';

const useDelete = (id) => {
  const [item, setDeleteItem] = useState(null);
  console.log(item);
  useEffect(() => {
    if (item) {
      const API = `http://localhost:3000/employee/${item}`;
      fetch(API, { method: 'DELETE' })
        .then((response) => {
          return response.json();
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [item]);

  return { setDeleteItem };
};

export default useDelete;
