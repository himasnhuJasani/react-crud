import React, { useEffect, useState } from "react";
const useFetc = (endpoint) =>{
    const [data,setData] = useState([]);
    const API = `http://localhost:3000/${endpoint}`;

    useEffect(()=>{
        (async () => {
            const users = await fetch(API).then((response) => {
                return response.json();
              })
            
            setData(users);
          })();
    
    },[endpoint])
    return{data,setData}
}
export default useFetc;
