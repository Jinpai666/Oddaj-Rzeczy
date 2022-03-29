import React from "react";


export default function DecoratedHeader({text,styling}){
    return (
        <h2 className={`decorated-header ${styling}`}>{text}</h2>
    )
}