import React from "react";
import DecoratedHeader from "./DecoratedHeader";
import LargeButton from "./LargeButton";

export default function HomeMainSection(props){
    return (
        <section id="main" className="main-section">
            <div className="main-section__right-col">
                <h1 className="main-section__heading">Zacznij pomagać!</h1>
                <DecoratedHeader styling={"main-section__heading-bottom"} text={"Oddaj niechciane rzeczy w zaufane ręce"} />
                <div className="main-section__button-container">
                    <LargeButton linkTo={!props.currentUser ? "logowanie" : "/"}  text={"ODDAJ RZECZY"} />
                    <LargeButton linkTo={!props.currentUser ? "logowanie" : "/"}  text={"ZORGANIZUJ ZBIÓRKĘ"} />
                </div>
            </div>
        </section>
    )
}