import React from "react";
import DecoratedHeader from "./DecoratedHeader";
import LargeButton from "./LargeButton";

export default function FourSteps(){
    return (
        <section className="steps">
            <DecoratedHeader text={"Wystarczą 4 proste kroki"} />
            <div className="steps__row">
                <div className="steps__col">
                    <p className="steps__paragraph-top steps__paragraph-shirt">Wybierz rzeczy</p>
                    <p className="steps__paragraph-bottom">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps__col">
                    <p className="steps__paragraph-top steps__paragraph-bag">Spakuj je</p>
                    <p className="steps__paragraph-bottom">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps__col">
                    <p className="steps__paragraph-top steps__paragraph-scope">Zdecyduj komu chcesz pomóc</p>
                    <p className="steps__paragraph-bottom">wybierz zaufane miejsce</p>
                </div>
                <div className="steps__col">
                    <p className="steps__paragraph-top steps__paragraph-recycle">Zamów kuriera</p>
                    <p className="steps__paragraph-bottom">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <LargeButton text={"oddaj rzeczy"} linkTo={"logowanie"} />
        </section>
    )
}