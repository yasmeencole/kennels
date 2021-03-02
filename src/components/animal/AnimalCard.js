import React from "react"
import "./Animal.css"

export const AnimalCard = ({animalProps, owner, location}) => (
    <section className="animal">
        <h3 className="animal__name">{animalProps.name}</h3>
        <div className="animal__breed">Breed: {animalProps.breed}</div>
        <div className="location__address">Location: {location.name}</div>
        <div className="location__address">Customer: {owner.name}</div>
    </section>
)