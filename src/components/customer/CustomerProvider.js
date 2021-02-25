import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CustomerContext = createContext()

// This component establishes what data can be used.
export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(response => response.json())
        .then(customersData => setCustomers(customersData))
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
        customers, getCustomers
    }}>
        {props.children}
        </CustomerContext.Provider>
)
}