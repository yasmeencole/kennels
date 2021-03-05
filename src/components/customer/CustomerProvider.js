import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CustomerContext = createContext()

// This component establishes what data can be used.
export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const [ searchTerms, setSearchTerms ] = useState("")

    const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(response => response.json())
        .then(customersData => setCustomers(customersData))
}

const addCustomer = customerObj => {
    return fetch("http://localhost:8088/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customerObj)
    })
    .then(response => response.json())
}

const getCustomerById = (id) => {
    return fetch(`http://localhost:8088/customers/${id}`)
        .then(res => res.json())
}

const releaseCustomer = customerId => {
    return fetch(`http://localhost:8088/customers/${customerId}`, {
        method: "DELETE"
    })
    .then(getCustomers)
}

const updateCustomer = customer => {
    return fetch(`http://localhost:8088/customers/${customer.id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
        .then(getCustomers)
    }
/*
    You return a context provider which has the
    `animals` state, `getAnimals` function,
    and the `addAnimal` function as keys. This
    allows any child elements to access them.
  */
    return (
    <CustomerContext.Provider value={{
    //   animals: animals, 
    //   getAnimals: getAnimals
        customers, getCustomers, addCustomer, getCustomerById, releaseCustomer, updateCustomer, searchTerms, setSearchTerms
    }}>
        {props.children}
        </CustomerContext.Provider>
)
}