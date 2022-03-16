import React from "react";
import grid from "../images/grid.png";
import Card from "../components/Card";
import data from "../data";
console.table(data);


export default function Hero() {

    const cards = data.map(item => {
        return(
            // <Card
            //         key={item.id}
            //         img={item.img}
            //         rating={item.stats.rating}
            //         reviewCount={item.stats.reviewCount}
            //         country={item.country}
            //         header={item.header}
            //         title={item.title}
            //         openspots={item.openspots}
            //     />
            <Card
                key={item.id}
                // item={item}
                {...item}
            />
        )
    });

    return (
        <>
            <section className="hero">
                <img src={grid}/>
                <h1>Lorem Ipsum</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <section className="card--list">
                {cards}
                </section>
            </section>
        </>
    )
}