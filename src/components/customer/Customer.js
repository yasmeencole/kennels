import React from "react"
import "./Customer.css"

export const Customer = ({customerProps}) => (
    <section className="customer">
        <h3 className="customer__name">{customerProps.name}</h3>
        <div className="customer__address">Address: {customerProps.address}</div>
    </section>
)