import React, { useEffect, useContext } from "react"
import { Employee } from "./Employee"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)


    useEffect(() => {
    console.log("Fetching employees data from API")
    getEmployees()
    }, [])

    return (
    <>
        <h4>Employees</h4>
        <article className="employees">
        {
            employees.map(employeesObject => {
            return <Employee key={employeesObject.id} employeeProps={employeesObject} />
        })
        }
        </article>
    </>
)
}

// export const EmployeeList = () => (
//         <>
//         <h4>Employees</h4>
//         <article className="employees">
//             Placeholder for all of the employees
//         </article>
//         </>
// )