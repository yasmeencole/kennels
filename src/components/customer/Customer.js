import React from "react"
import "./Customer.css"
import { Link } from "react-router-dom"

export const Customer = ({customer}) => {
    return (
    <section className="customer">
        <h3 className="customer__name">
        <Link to={`/customers/detail/${customer.id}`}>
            { customer.name }
        </Link>
        </h3>
        {/* <div className="customer__address">Address: {customer.address}</div> */}
    </section>
    )
}