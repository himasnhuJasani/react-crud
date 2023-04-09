import React, { useEffect, useState } from 'react';

const useEdit = () => {
  const [item, editItem] = useState(null);
  console.log(item);
  useEffect(() => {
    if (item) {
      const API = `http://localhost:3000/employee/${item.id}`;
      fetch(API, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(item) })
        .then((response) => {
          return response.json();
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [item]);

  return { editItem };
};

export default useEdit;
