import { Button } from "bootstrap";
import { Link, useLocation, useParams } from 'react-router-dom';

import React from "react";
import './resumeHome.css'
import useFetc from "../hooks/useFetc";
const HomeResume=()=>{
    let id = useParams().id
    const {data} = useFetc(`employee\?id=${id}`)
    return(
    <>
    <div className="header">
        <h3>{data[0]?.name}</h3>
        <h6>him@email.com</h6>
            </div>
        <hr/>
        <div>
            <h5>Skill</h5>
            <ul>
                <li>{data[0]?.skill}</li>
                <li>ReactJs</li>
                <li>Html</li>
            </ul>
        </div>
        <hr/>
        <div>
        <h5>Education</h5>
            <ul>
                <li>{data[0]?.education}</li>
                <li>12th</li>
                <li>BCA</li>
            </ul>
        </div><hr/>
        <div>
        <h5>Experience</h5>
            <ul>
                <li>Webiots</li>
                <li>{data[0]?.experience}</li>
                <li>Login</li>
            </ul>
        </div>
        <Link to='/create'>Create Resume</Link>
        <Link to={`/edit/${data[0]?.id}`}>Edit resume</Link>
    </>
)}
export default HomeResume;
