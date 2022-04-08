import React from "react";
import MainSection from "./MainSection"
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import Footer from "./Footer";

export default function Home(props){

    return (
        <>
            <MainSection
                currentUser={props.currentUser}
            />
            <ThreeColumns/>
            <FourSteps/>
            <About/>
            <Help/>
            <Contact/>
            <Footer/>
        </>

    )
}