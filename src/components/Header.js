import React from "react";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
//react hash router
export default function HomeHeader(){
    return (
        <nav className="header">
            <div className="header__top">
                <Link className="header__button" to="logowanie">Zaloguj</Link>
                <Link className="header__button" to="rejestracja">Załóż Konto</Link>
            </div>
            <ul className="header__bottom">
                <li className="header__menu-item" tabIndex={0}>
                    <HashLink
                        className="header__menu-link"
                        activeClass="active"
                        to={"/#main"}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Start
                    </HashLink>
                </li>
                <li className="header__menu-item" tabIndex={0}>
                    <HashLink
                        className="header__menu-link"
                        activeClass="active"
                        to="/#threeCol"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        O co chodzi?
                    </HashLink>
                </li>
                <li className="header__menu-item" tabIndex={0}>
                    <HashLink
                        className="header__menu-link"
                        activeClass="active"
                        to="/#about-us"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        O nas
                    </HashLink>
                </li>
                <li className="header__menu-item" tabIndex={0}>
                    <HashLink
                        className="header__menu-link"
                        activeClass="active"
                        to="/#help"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Fundacje i organizacje
                    </HashLink>
                </li>
                <li className="header__menu-item" tabIndex={0}>
                    <HashLink
                        className="header__menu-link"
                        activeClass="active"
                        to="/#contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Kontakt
                    </HashLink>
                </li>
            </ul>
        </nav>


    )

}