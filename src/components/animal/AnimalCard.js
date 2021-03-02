import React from "react"
import "./Animal.css"

export const AnimalCard = ({animalProps, customerProps, locationProps}) => (
    <section className="animal">
        <h3 className="animal__name">{animalProps.name}</h3>
        <div className="animal__breed">Breed: {animalProps.breed}</div>
        <div className="location__address">Location: {animalProps.location.name}</div>
        {/* <div className="location__address">Customer: {animalProps.customer.name}</div> */}
    </section>
)