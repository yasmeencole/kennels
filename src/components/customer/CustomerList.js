import React, { useEffect, useContext, useState } from "react"
import { Customer } from "./Customer"
import "./Customer.css"
import { CustomerContext } from "./CustomerProvider"
import { useHistory } from "react-router-dom";


export const CustomerList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers, searchTerms } = useContext(CustomerContext)

    const [ filteredCustomers, setFiltered ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getCustomers()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching customers
            const subset = customers.filter(customer => customer.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all customers
            setFiltered(customers)
        }
        }, [searchTerms, customers])

    return (
    <>
        <h1>Customers</h1>
        <button onClick={() => { history.push("/customers/create") }}>Add Customer</button>

        <div className="customers">
        {
            filteredCustomers.map(customer => {
            return <Customer key={customer.id} customer={customer} />
        })
        }
        </div>
    </>
)
}

