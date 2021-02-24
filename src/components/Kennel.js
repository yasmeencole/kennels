import React from "react"
import "./Kennel.css"

export const Kennel = () => { 
    const kennel = {
        name: "Nashville Kennels",
        locations: [
            {
                name: "Nashville North",
                address: "500 Puppy Way"
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
    </>
    )
}