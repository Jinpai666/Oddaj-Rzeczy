import React from "react";
import DecoratedHeader from "./DecoratedHeader";
import {Link} from "react-router-dom";


export default function Logout(){
    return(
        <section className="logout">
            <DecoratedHeader text={"Wylogowanie nastąpiło pomyślnie"} styling={"logout__header"}/>
            <Link className="logout__button" to="/">Strona główna</Link>
        </section>
    )
}