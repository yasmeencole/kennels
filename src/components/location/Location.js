import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const Location = ({location}) => {
    return (
    <section className="location">
        <h3 className="location__name">
        <Link to={`/locations/detail/${location.id}`}>
            { location.name }
        </Link>
        </h3>
    </section>
    )
}