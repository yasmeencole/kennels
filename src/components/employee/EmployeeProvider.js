import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=location")
        .then(response => response.json())
        .then(employeesData => setEmployees(employeesData))
}
const addEmployee = employeeObj => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObj)
    })
    .then(response => response.json())
}
/*
    You return a context provider which has the
    `animals` state, `getAnimals` function,
    and the `addEmployee` function as keys. This
    allows any child elements to access them.
  */
    return (
    <EmployeeContext.Provider value={{
    //   animals: animals, 
    //   getAnimals: getAnimals
        employees, getEmployees, addEmployee
    }}>
        {props.children}
        </EmployeeContext.Provider>
)
}