import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const Employee = ({employeeProps}) => {
    return (
    <section className="employee">
        <h3 className="employee__name">
        <Link to={`/employees/detail/${employeeProps.id}`}>
            { employeeProps.name }
        </Link>
        </h3>
        {/* <div className="employee__location">Location: {employeeProps.location.name}</div> */}
    </section>
    )
}