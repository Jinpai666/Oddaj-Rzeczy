import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {BiMenu} from "react-icons/bi";
import {CgClose} from "react-icons/cg";

export default function HomeHeader(props){
    //burger menu logic
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    //clear login error
    const path = useLocation().pathname;
    useEffect(() =>{
        if(path !== "/logowanie"){
            props.setLoginError("")
            console.log('clear')
        }
    }, [path]);

    return (
        <nav className="header">
            {!props.currentUser
                ? <div className="header__top">
                    <Link className="header__button header__button-light" to="logowanie">Zaloguj</Link>
                    <Link className="header__button header__button-light" to="rejestracja">Załóż Konto</Link>
                </div>
                : <div className="header__top">
                    <p className="header__greeting">Cześć {props.currentUser.email}!</p>
                    <Link className="header__button header__button-dark" to="/">Oddaj rzeczy</Link>
                    <button className="header__logout-button" onClick={()=>{
                        props.logout()
                    }}>Wyloguj</button>
                </div>
            }
            <ul  className={`header__bottom ${!isOpen && "hidden"}`}>
                <li
                    className="header__menu-item"
                    onClick={handleClick}
                >
                    <HashLink
                        className="header__menu-link"
                        // activeClass="active"
                        to={"/#main"}
                        spy={"true"}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Start
                    </HashLink>
                </li>
                <li
                    className="header__menu-item"
                    onClick={handleClick}
                >
                    <HashLink
                        className="header__menu-link"
                        // activeClass="active"
                        to="/#threeCol"
                        spy={"true"}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        O co chodzi?
                    </HashLink>
                </li>
                <li
                    className="header__menu-item"
                    onClick={handleClick}
                >
                    <HashLink
                        className="header__menu-link"
                        // activeClass="active"
                        to="/#about-us"
                        spy={"true"}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        O nas
                    </HashLink>
                </li>
                <li
                    className="header__menu-item"
                    onClick={handleClick}
                >
                    <HashLink
                        className="header__menu-link"
                        // activeClass="active"
                        to="/#help"
                        spy={"true"}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Fundacje i organizacje
                    </HashLink>
                </li>
                <li
                    className="header__menu-item"
                    onClick={handleClick}
                >
                    <HashLink
                        className="header__menu-link"
                        // activeClass="active"
                        to="/#contact"
                        spy={"true"}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Kontakt
                    </HashLink>
                </li>
            </ul>
            {!isOpen
                ? <BiMenu className="burger" /*size="40px"*/ onClick={handleClick} />
                : <CgClose className="burger" /*size="40px"*/ onClick={handleClick} />}
        </nav>
    )
}
