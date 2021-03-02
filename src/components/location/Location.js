import React from "react"
import "./Location.css"

export const Location = ({locationProps}) => (
    <section className="location">
        <h3 className="location__name">{locationProps.name}</h3>
        <div className="location__address">{locationProps.address}</div>
    </section>
)