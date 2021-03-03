import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"


export const AnimalCard = ({animalProps, owner, location}) => {
    return (
    <section className="animal">
        <h3 className="animal__name">
        <Link to={`/animals/detail/${animalProps.id}`}>
            { animalProps.name }
        </Link>
        </h3>
        <div className="animal__breed">Breed: {animalProps.breed}</div>
        <div className="location__address">Location: {location.name}</div>
        <div className="location__address">Customer: {owner.name}</div>
    </section>)
}