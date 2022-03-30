import React, {useEffect, useState} from "react";
import DecoratedHeader from "./DecoratedHeader";


export default function HomeHelp(){
    const [clicked, setClicked] = useState('Fundacjom')
    const handleClick = (e) => {
        const collection = e.target.innerHTML;
        setClicked(collection);
    }
    // useEffect(()=>{
    //     console.log("Current collection: ", clicked)
    // },[clicked])

    return (
        <section id="help" className="help">
            <DecoratedHeader styling={"help__header"} text={"Komu pomagamy?"} />
            <div className="help__buttons">
                <div onClick={handleClick} className="help__button">Fundacjom</div>
                <div onClick={handleClick} className="help__button">Organizacjom pozarządowym</div>
                <div onClick={handleClick} className="help__button">Lokalnym zbiórkom</div>
            </div>
            <div className="help__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
            {clicked==="Fundacjom" && <div>Kliknąłem1: {clicked}</div>}
            {clicked==="Organizacjom pozarządowym" && <div>Kliknąłem2: {clicked}</div>}
            {clicked==="Lokalnym zbiórkom" && <div>Kliknąłem3: {clicked}</div>}

        </section>
    )
}