import React from "react";
import {Link, useNavigate} from "react-router-dom";


export default function SignUp(){
    let navigate = useNavigate()

    return (
        <>
            <Link to="/">Signup</Link>
            <Link to="login">Login</Link>
            <button onClick={()=>{navigate('/')}} >Main</button>

        </>
    )

}