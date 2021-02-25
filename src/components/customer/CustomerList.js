import React, { useEffect, useContext } from "react"
import { Customer } from "./Customer"
import "./Customer.css"
import { CustomerContext } from "./CustomerProvider"

export const CustomerList = () => {
  // This state changes when `getAnimals()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)


    useEffect(() => {
    console.log("Fetching customers data from API")
    getCustomers()
    }, [])

    return (
    <>
        <h4>Customers</h4>
        <article className="customers">
        {
            customers.map(customersObject => {
            return <Customer key={customersObject.id} customerProps={customersObject} />
        })
        }
        </article>
    </>
)
}