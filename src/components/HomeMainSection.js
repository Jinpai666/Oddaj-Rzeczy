import React from "react";
import {Link} from "react-router-dom";
import DecoratedHeader from "./DecoratedHeader";


export default function HomeMainSection(){

    return (
        <section id="main" className="main-section">
            <div className="main-section__img"></div>
            <div className="main-section__right-col">
                <h1 className="main-section__heading">Zacznij pomagać!</h1>
                <DecoratedHeader className="main-section__heading" text={"Oddaj niechciane rzeczy w zaufane ręce"} />

                <div className="main-section__button-container">
                    <Link className="main-section__button" to="logowanie">ODDAJ RZECZY</Link>
                    <Link className="main-section__button" to="logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
            </div>
        </section>
    )
}