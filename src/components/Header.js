import React from "react";
import {Link} from "react-router-dom";




export default function HomeHeader(){
    return (
        <nav className="header">
            <div className="header__top">
                <Link className="header__button" to="login">Zaloguj</Link>
                <Link className="header__button" to="signup">Załóż Konto</Link>
            </div>
                <ul className="header__bottom">
                    <li ><a className="header__menu-item" href="#start">Start</a></li>
                    <li className="header__menu-item">O co chodzi?</li>
                    <li className="header__menu-item">O nas</li>
                    <li className="header__menu-item">Fundacja i organizacje</li>
                    <li className="header__menu-item">Kontakt</li>
                </ul>
        </nav>


    )

}