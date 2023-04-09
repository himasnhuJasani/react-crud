import React from 'react'
import { Link } from 'react-router-dom'
import useFetc from '../hooks/useFetc'
import useDelete from '../hooks/useDelete';

const ResumeList= () =>{

     const{data} =  useFetc('employee')
  const { setDeleteItem } = useDelete();

     const handleDelete = (id) => {
        setDeleteItem(id);
      };
return(
    <>
        <h1>Resume List</h1>
        {data?.map((user,index)=>(
            <><Link to={`/HomeResume/${user.id}`}>{user.name}</Link><button onClick={() => handleDelete(user.id)}>delete</button><br /></>

        ))}
    </>
)
}

export default ResumeList