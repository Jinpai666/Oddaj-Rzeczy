import React, {useState, useEffect} from "react";
import DecoratedHeader from "./DecoratedHeader";
import Foundations from "../collections/foundations.json"
import Organisations from "../collections/organisations.json"
import Local from "../collections/local.json"

export default function HomeHelp(){
    const foundations = Foundations.slice(0,3);
    const organisations = Organisations.slice(0,3);
    const locals = Local.slice(0,3);
    const [clicked, setClicked] = useState('Fundacjom')
    // const [dataJson, setDataJson] = useState(foundations)
    const handleClick = (e) => {
        const collection = e.target.innerHTML;
        setClicked(collection);
    }

    // useEffect(() =>{
    //     if (clicked==="Fundacjom"){
    //         setDataJson(foundations)
    //     }else if(clicked==="Lokalnym zbiórkom"){
    //         setDataJson(local)
    //     }else if(clicked==="Organizacjom pozarządowym"){
    //         setDataJson(organisations)
    //     }
    // }, [clicked, dataJson])


    return (
        <section id="help" className="help">
            <DecoratedHeader styling={"help__header"} text={"Komu pomagamy?"} />
            <div className="help__buttons">
                <div onClick={handleClick} className="help__button">Fundacjom</div>
                <div onClick={handleClick} className="help__button">Organizacjom pozarządowym</div>
                <div onClick={handleClick} className="help__button">Lokalnym zbiórkom</div>
            </div>
            {clicked==="Fundacjom" && <div className="help__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </div>}
            {clicked==="Organizacjom pozarządowym" && <div className="help__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>}
            {clicked==="Lokalnym zbiórkom" && <div className="help__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa  dignissimos ea minima quos.
            </div>}


            {clicked==="Fundacjom" && foundations.map((foundation)=>{
                return (
                    <div className="help__details" key={foundation.id}>
                        <div className="help__detail help__detail-left" >
                            <p className="help__detail-left-row-1" >Fundacja "{foundation.name}"</p>
                            <p className="help__detail-left-row-2" >Cel i misja: {foundation.goals}.</p>
                        </div>
                        <p className="help__detail help__detail-right help__detail-row">{foundation.items}</p>
                    </div>
                )
            })}
            {clicked==="Organizacjom pozarządowym" && organisations.map((organisation)=>{
                return (
                    <div className="help__details" key={organisation.id}>
                        <div className="help__detail help__detail-left" >
                            <p className="help__detail-left-row-1" >Organizacja "{organisation.name}"</p>
                            <p className="help__detail-left-row-2" >{organisation.goals}.</p>
                        </div>
                        <p className="help__detail help__detail-right help__detail-row">{organisation.items}</p>
                    </div>
                )
            })}
            {clicked==="Lokalnym zbiórkom" && locals.map((local)=>{
                return (
                    <div className="help__details" key={local.id}>
                        <div className="help__detail help__detail-left" >
                            <p className="help__detail-left-row-1" >Zbiórka "{local.name}"</p>
                            <p className="help__detail-left-row-2" >{local.goals}.</p>
                        </div>
                        <p className="help__detail help__detail-right help__detail-row">{local.items}</p>
                    </div>
                )
            })}

        </section>
    )
}