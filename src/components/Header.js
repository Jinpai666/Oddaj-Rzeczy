import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";




export default function HomeHeader(){
    return (
        <nav className="header">
            <div className="header__top">
                <Link className="header__button" to="login">Zaloguj</Link>
                <Link className="header__button" to="signup">Załóż Konto</Link>
            </div>
            <ul className="header__bottom">
                <li className="header__menu-item"><ScrollLink activeClass="active" to="main" spy={true} smooth={true} offset={50} duration={500}>Start</ScrollLink></li>
                <li className="header__menu-item"><ScrollLink activeClass="active" to="threeCol" spy={true} smooth={true} offset={50} duration={500}>O co chodzi?</ScrollLink></li>
                <li className="header__menu-item"><ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>O nas</ScrollLink></li>
                <li className="header__menu-item"><ScrollLink activeClass="active" to="groups" spy={true} smooth={true} offset={50} duration={500}>Fundacje i organizacje</ScrollLink></li>
                <li className="header__menu-item"><ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Kontakt</ScrollLink></li>
            </ul>
        </nav>


    )

}