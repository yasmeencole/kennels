import React from "react"
import "./Animal.css"

export const AnimalCard = ({animalProps}) => (
    <section className="animal">
        <h3 className="animal__name">{animalProps.name}</h3>
        <div className="animal__breed">Breed: {animalProps.breed}</div>
        <address className="location__address">{animalProps.location.name}</address>
    </section>
)