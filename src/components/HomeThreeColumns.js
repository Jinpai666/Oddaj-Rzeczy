import React from "react";

export default function HomeThreeColumns(){
    return (
        <section id="threeCol" className="threeCol">
            <div className="threeCol__col">
                <p className="threeCol__first-row">10</p>
                <p className="threeCol__second-row">ODDANYCH WORKÓW</p>
                <p className="threeCol__third-row">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab cum fuga laboriosam, pariatur provident quis sed voluptas.
                </p>
            </div>
            <div className="threeCol__col">
                <p className="threeCol__first-row">5</p>
                <p className="threeCol__second-row">WSPARTYCH ORGANIZACJI</p>
                <p className="threeCol__third-row">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab cum fuga laboriosam, pariatur provident quis sed voluptas.
                </p>
            </div>
            <div className="threeCol__col">
                <p className="threeCol__first-row" >7</p>
                <p className="threeCol__second-row">ZORGANIZOWANYCH ZBIÓREK</p>
                <p className="threeCol__third-row">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab cum fuga laboriosam, pariatur provident quis sed voluptas.
                </p>
            </div>
        </section>
    )
}