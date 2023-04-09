import { Button } from 'bootstrap'
import React, { useState } from 'react'
import useFetc from '../hooks/useFetc'
import { Link, useLocation, useParams } from 'react-router-dom';


const ResumeEditor=()=>{
    const [item ,setUserInfo] = useState(
        {id:'',name: '', skill: '', education :'', experience:''}
        )
    let id = useParams().id

        const {data} = useFetc(`employee\?id=${id}`)

        const handleChange=(e)=>{
    e.preventDefault();
        // console.log("sdsadad",item)
        setUserInfo({...item,id:  new Date().getTime()})
        const API = `http://localhost:3000/employee/${id}`;
        fetch(API, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        })
    }
    return(
        <>
            <h1>Resume Creator</h1>
            <form onSubmit={handleChange}>
                <input type="text" placeholder='name'   onChange={(e)=> setUserInfo({...item,name : e.target.value})}/>
                <input type="text" placeholder='Skills'  onChange={(e)=> setUserInfo({...item,skill : e.target.value})}/>
                <input type="text" placeholder='education'  onChange={(e)=> setUserInfo({...item,education : e.target.value})}/>
                <input type="text" placeholder='experience'  onChange={(e)=> setUserInfo({...item,experience : e.target.value})}/>
                <button>Create Resume</button>
            </form>
        </>
    )
}
export default ResumeEditor