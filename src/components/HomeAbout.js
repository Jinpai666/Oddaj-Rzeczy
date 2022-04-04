import React from "react";
import DecoratedHeader from "./DecoratedHeader";

export default function HomeAbout(){
    return (
        <section id="about-us" className="about">
            <div className="about__left-side">
                <DecoratedHeader text={"O nas"} styling={"about__header"}/>
                <p className="about__text">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
            </div>
        </section>
    )
}