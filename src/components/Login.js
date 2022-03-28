import React from "react";
import {Link, useNavigate} from "react-router-dom";



export default function Login(){
    let navigate = useNavigate()
    return (
        <>
            <Link to="signup">Signup</Link>
            <Link to="/">Login</Link>
            <button onClick={()=>{navigate('/')}} >Main</button>
        </>
    )

}