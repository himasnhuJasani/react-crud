import { Button } from 'bootstrap'
import React, { useState } from 'react'

const ResumeCreator=()=>{
    const [item ,setUserInfo] = useState(
        {id:'',name: '', skill: '', education :'', experience:''}
        )
  
    const handleChange=(e)=>{
    e.preventDefault();
        // console.log("sdsadad",item)
        setUserInfo({...item,id:  new Date().getTime()})
        const API = `http://localhost:3000/employee`;
        fetch(API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        })
    }
    return(
        <>
            <h1>Resume Creator</h1>
            <form onSubmit={handleChange}>
                <input type="text" placeholder='name' onChange={(e)=> setUserInfo({...item,name : e.target.value})}/>
                <input type="text" placeholder='Skills' onChange={(e)=> setUserInfo({...item,skill : e.target.value})}/>
                <input type="text" placeholder='education' onChange={(e)=> setUserInfo({...item,education : e.target.value})}/>
                <input type="text" placeholder='experience' onChange={(e)=> setUserInfo({...item,experience : e.target.value})}/>
                <button>Create Resume</button>
            </form>
        </>
    )
}
export default ResumeCreator