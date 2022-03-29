import {Link} from "react-router-dom";
import React from "react";


export default function LargeButton({text,linkTo}){
    return (
        <Link to={linkTo} className="large-button" >{text}</Link>
    )
}
