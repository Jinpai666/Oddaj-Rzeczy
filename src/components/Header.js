import React from "react";
import {Link} from "react-router-dom";




export default function HomeHeader(){
    return (
        <nav className="header">
           <Link className="header__button" to="login">Zaloguj</Link>
           <Link className="header__button" to="signup">Załóż Konto</Link>
        </nav>

    )

}