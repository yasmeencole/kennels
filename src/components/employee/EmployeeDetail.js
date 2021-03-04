import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    const { getEmployeeById, releaseEmployee } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({})

    const {employeeId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
        .then((response) => {
        setEmployee(response)
        })
    }, [])

    const handleRelease = () => {
        releaseEmployee(employee.id)
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {employee.location?.name}</div>
        {/* <div className="employee__email">Email: {employee.email}</div> */}
        {/* What's up with the question mark???? See below.*/}
        {/* ? is testing/trying to see if the location or customer property exist */}
        {/* <div className="animal__location">Location: {animal.location?.name}</div>
        <div className="animal__owner">Customer: {animal.customer?.name}</div> */}
        <button onClick={handleRelease}>Release Employee</button>
        <button onClick={() => { history.push(`/employees/edit/${employee.id}`) }}>Edit</button>
        </section>
    )
}