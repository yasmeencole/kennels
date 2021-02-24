import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"

export const Kennel = () => { 
    const kennel = {
        name: "Nashville Kennels",
        locations: [
            {
                name: "Nashville North",
                address: "500 Puppy Way, Nashville, TN 37210"
            }
        ]
    }

    return (

    <>
        <h2>{kennel.name}</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the {kennel.locations[0].name} Location</div>
            <div>{kennel.locations[0].address}</div>
        </address>
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
    </>    
    )
}
