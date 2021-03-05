import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
    const { getCustomerById, releaseCustomer } = useContext(CustomerContext)

    const [customer, setCustomer] = useState({})

    const {customerId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", customerId)
        getCustomerById(customerId)
        .then((response) => {
            setCustomer(response)
        })
    }, [])

    const handleRelease = () => {
        releaseCustomer(customer.id)
        .then(() => {
            history.push("/customers")
        })
    }

    return (
        <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        {/* What's up with the question mark???? See below.*/}
        {/* ? is testing/trying to see if the location or customer property exist */}
        <div className="customer__address">Address: {customer.address}</div>
        <div className="customer__email">Email: {customer.email}</div>
        <button onClick={handleRelease}>Remove Customer</button>
        <button onClick={() => { history.push(`/customers/edit/${customer.id}`) }}>Edit</button>
        </section>
    )
}