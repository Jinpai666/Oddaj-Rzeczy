import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {BiMenu} from "react-icons/bi";
import {CgClose} from "react-icons/cg";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";

export default function HomeHeader(props){
//firebase
    const logout = async () => {
        await signOut(auth);
    }
//clear login error
    const path = useLocation().pathname;
    useEffect(() =>{
        if(path !== "/logowanie"){
            props.setLoginError("")
            console.log('clear')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);
//burger menu logic
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="header">
            {!props.currentUser
                ? <div className="header__top">
                    <Link className="header__button header__button-light" to="logowanie">Zaloguj</Link>
                    <Link className="header__button header__button-light" to="rejestracja">Załóż Konto</Link>
                </div>
                : <div className="header__top">
                    <p className="header__greeting ">Cześć {props.currentUser.email}!</p>
                    <Link className="header__button header__button-dark " to="/">Oddaj rzeczy</Link>
                    <button className="header__logout-button " onClick={()=>{
                        logout()
                    }}>Wyloguj</button>
                </div>
            }
            <div  className={`header__bottom ${!isOpen && "hidden"}`}>
                <HashLink
                    onClick={handleClick}
                    className="header__menu-link header__menu-item"
                    to={"/#main"}
                    spy={"true"}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Start
                </HashLink>
                <HashLink
                    onClick={handleClick}
                    className="header__menu-link header__menu-item"
                    to="/#threeCol"
                    spy={"true"}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    O co chodzi?
                </HashLink>
                <HashLink
                    onClick={handleClick}
                    className="header__menu-link header__menu-item"
                    to="/#about-us"
                    spy={"true"}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    O nas
                </HashLink>
                <HashLink
                    onClick={handleClick}
                    className="header__menu-link header__menu-item"
                    to="/#help"
                    spy={"true"}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Fundacje i organizacje
                </HashLink>
                <HashLink
                    onClick={handleClick}
                    className="header__menu-link header__menu-item"
                    to="/#contact"
                    spy={"true"}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Kontakt
                </HashLink>
            </div>
            {!isOpen
                ? <BiMenu className="burger" /*size="40px"*/ onClick={handleClick} />
                : <CgClose className="burger" /*size="40px"*/ onClick={handleClick} />}
        </nav>
    )
}
