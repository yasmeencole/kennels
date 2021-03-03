import React, { useEffect, useContext } from "react"
import { Employee } from "./Employee"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { useHistory } from "react-router-dom";


export const EmployeeList = () => {

    const history = useHistory()

  // This state changes when `getAnimals()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)


    useEffect(() => {
        console.log("Fetching employees data from API")
        getEmployees()
        .then(getLocations)

    }, [])

    return (
    <>
        <h4>Employees</h4>
        <button onClick={() => { history.push("/employees/create") }}>Add Employee</button>
        <article className="employees">
        {
            employees.map(employeesObject => {
                const location = locations.find(location => location.id === employeesObject.locationId)
            return <Employee key={employeesObject.id} employeeProps={employeesObject} location={location}/>
        })
        }
        </article>
    </>
)
}