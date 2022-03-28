import React from "react";
import HomeHeader from "./Header"
import HomeMainSection from "./HomeMainSection"
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeHelp from "./HomeHelp";
import HomeFooter from "./HomeFooter";
import Header from "./Header";

export default function Home(){
    return (
        <>
            <HomeMainSection/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAbout/>
            <HomeHelp/>
            <HomeContact/>
            <HomeFooter/>
        </>

    )
}