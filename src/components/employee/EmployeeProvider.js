import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const [ searchTerms, setSearchTerms ] = useState("")

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

const getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
        .then(res => res.json())
}

const releaseEmployee = employeeId => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
        method: "DELETE"
    })
    .then(getEmployees)
}

const updateEmployee = employee => {
    return fetch(`http://localhost:8088/employees/${employee.id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
        .then(getEmployees)
    }

/*
    You return a context provider which has the
    `employees` state, `getEmployees` function,
    and the `addEmployee` function as keys. This
    allows any child elements to access them.
  */
    return (
    <EmployeeContext.Provider value={{
    //   employees: employees, 
    //   getEmployees: getEmployees
        employees, getEmployees, addEmployee, getEmployeeById, releaseEmployee, updateEmployee, searchTerms, setSearchTerms
    }}>
        {props.children}
        </EmployeeContext.Provider>
)
}