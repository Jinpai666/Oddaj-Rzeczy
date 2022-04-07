import React, {useState} from "react";
import HomeMainSection from "./HomeMainSection"
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeHelp from "./HomeHelp";
import HomeFooter from "./HomeFooter";

export default function Home(props){

    return (
        <>
            <HomeMainSection
                currentUser={props.currentUser}
            />
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAbout/>
            <HomeHelp/>
            <HomeContact/>
            <HomeFooter/>
        </>

    )
}