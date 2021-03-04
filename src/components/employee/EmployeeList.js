import React, { useEffect, useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { useHistory } from "react-router-dom";
// import { LocationContext } from "../location/LocationProvider"


// export const EmployeeList = () => {

//     const history = useHistory()

//   // This state changes when `getAnimals()` is invoked below
//     const { employees, getEmployees } = useContext(EmployeeContext)
//     const { locations, getLocations } = useContext(LocationContext)


//     useEffect(() => {
//         console.log("Fetching employees data from API")
//         getEmployees()
//         .then(getLocations)

//     }, [])

//     return (
//     <>
//         <h4>Employees</h4>
//         <button onClick={() => { history.push("/employees/create") }}>Add Employee</button>
//         <article className="employees">
//         {
//             employees.map(employeesObject => {
//                 const location = locations.find(location => location.id === employeesObject.locationId)
//             return <Employee key={employeesObject.id} employeeProps={employeesObject} location={location}/>
//         })
//         }
//         </article>
//     </>
// )
// }

export const EmployeeList = () => {
    const { employees, getEmployees, searchTerms } = useContext(EmployeeContext)
    
    // Since you are no longer ALWAYS displaying all of the animals
    const [ filteredEmployees, setFiltered ] = useState([])
    const history = useHistory()
    
    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getEmployees()
    }, [])
    
    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
    if (searchTerms !== "") {
        // If the search field is not blank, display matching animals
        const subset = employees.filter(employee => employee.name.toLowerCase().includes(searchTerms))
        setFiltered(subset)
    } else {
        // If the search field is blank, display all employees
        setFiltered(employees)
    }
    }, [searchTerms, employees])
    
    return (
    <>
        <h1>Employees</h1>
    
        <button onClick={() => history.push("/employees/create")}>
            Add Employee
        </button>
        <div className="employees">
        {
        filteredEmployees.map(employee => {
            return <Employee key={employee.id} employee={employee} />
        })
        }
        </div>
    </>
    )
    }