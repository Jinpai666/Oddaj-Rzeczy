import React, {useState, useEffect} from "react";
import DecoratedHeader from "./DecoratedHeader";
import Foundations from "../collections/foundations.json";
import Organisations from "../collections/organisations.json";
import Local from "../collections/local.json";
import ReactPaginate from 'react-paginate';

export default function HomeHelp(){
    //change collection
    const [clicked, setClicked] = useState('Fundacjom')
    const [dataJson, setDataJson] = useState(Foundations)
    const strings = {
        foundations: "Fundacjom",
        organisations: "Organizacjom pozarządowym",
        locals: "Lokalnym zbiórkom"
    }


    useEffect(() =>{
        if (clicked===strings.foundations){
            setDataJson(Foundations)
        }else if(clicked===strings.locals){
            setDataJson(Local)
        }else if(clicked===strings.organisations){
            setDataJson(Organisations)
        }
    }, [clicked, dataJson])
    //paginate
    const [pageNr, setPageNr] = useState(0);
    const groupsPerPage = 3;
    const pagesVisited = pageNr * groupsPerPage;
    const pageCount = Math.ceil(dataJson.length / groupsPerPage);
    const changePage = ({selected}) => {
        setPageNr(selected)
    }
    //foundations
    const displayFoundations = dataJson.slice(pagesVisited, pagesVisited + groupsPerPage).map(group => {
        return (
            <div className="help__details" key={group.id}>
                <div className="help__detail help__detail-left" >
                    <p className="help__detail-left-row-1" >Fundacja "{group.name}"</p>
                    <p className="help__detail-left-row-2" >Cel i misja: {group.goals}.</p>
                </div>
                <p className="help__detail help__detail-right help__detail-row">{group.items}</p>
            </div>
        );
    });
    //organisations
    const displayOrganisations = dataJson.slice(pagesVisited, pagesVisited + groupsPerPage).map(group => {
        return (
            <div className="help__details" key={group.id}>
                <div className="help__detail help__detail-left" >
                    <p className="help__detail-left-row-1" >Organizacja "{group.name}"</p>
                    <p className="help__detail-left-row-2" >{group.goals}.</p>
                </div>
                <p className="help__detail help__detail-right help__detail-row">{group.items}</p>
            </div>
        );
    });
    //locals
    const displayLocals = dataJson.slice(pagesVisited, pagesVisited + groupsPerPage).map(group => {
        return (
            <div className="help__details" key={group.id}>
                <div className="help__detail help__detail-left" >
                    <p className="help__detail-left-row-1" >Zbiórka "{group.name}"</p>
                    <p className="help__detail-left-row-2" >{group.goals}.</p>
                </div>
                <p className="help__detail help__detail-right help__detail-row">{group.items}</p>
            </div>
        );
    });
    //handle group selection
    const handleClick = (e, name) => {
        setClicked(name);
        setPageNr(0);

    }


    return (
        <section id="help" className="help">
            <DecoratedHeader styling={"help__header"} text={"Komu pomagamy?"} />
            <div className="help__buttons">
                <h3
                    onClick={e => handleClick(e, strings.foundations)}
                    className="help__button"
                    style={clicked===strings.foundations ? {border:"1px solid #1A1818"} : {}}
                >Fundacjom
                </h3>
                <h3
                    onClick={e => handleClick(e, strings.organisations)}
                    className="help__button"
                    style={clicked===strings.organisations ? {border:"1px solid #1A1818"} : {}}
                >Organizacjom pozarządowym
                </h3>
                <h3
                    onClick={e => handleClick(e, strings.locals)}
                    className="help__button"
                    style={clicked===strings.locals ? {border:"1px solid #1A1818"} : {}}
                >Lokalnym zbiórkom
                </h3>
            </div>
            {clicked==="Fundacjom" && <div className="help__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </div>}
            {clicked===strings.organisations && <div className="help__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>}
            {clicked===strings.locals && <div className="help__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa  dignissimos ea minima quos.
            </div>}

            {clicked===strings.foundations && displayFoundations}
            {clicked===strings.organisations && displayOrganisations}
            {clicked===strings.locals && displayLocals}
            {dataJson.length > 3 && <ReactPaginate
                pageCount={pageCount}
                containerClassName="help__pagination"
                previousClassName="help__hide-buttons"
                nextClassName="help__hide-buttons"
                onPageChange={changePage}
                pageLinkClassName="help__pagination-button"
                activeClassName="help__pagination-active-button"
                forcePage={pageNr}
            />}
        </section>
    )
}