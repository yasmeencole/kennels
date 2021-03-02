import React from "react"
import "./Employee.css"

export const Employee = (employeeProps) => (
    <section className="employee">
        <h3 className="employee__name">{employeeProps.name}</h3>
        <div className="employee__location">Location{employeeProps.location}</div>
    </section>
)