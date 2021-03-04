import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';


export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    // const { customers, getCustomers } = useContext(CustomerContext)
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        // customerId: 0
    });

    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
const [isLoading, setIsLoading] = useState(true);

// Now that the form can be used for editing as well as adding an employee, you need access to the employee id for fetching the employee you want to edit
const { employeeId } = useParams();
const history = useHistory();

//when field changes, update state. This causes a re-render and updates the view.
//Controlled component
const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newEmployee = { ...employee }
    //animal is an object with properties.
    //set the property to the new value
    newEmployee[event.target.id] = event.target.value
    //update state
    setEmployee(newEmployee)
}

const handleSaveEmployee = () => {
    if (parseInt(employee.locationId) === 0) {
        window.alert("Please select a location")
    } else {
    //disable the button - no extra clicks
    setIsLoading(true);
    // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an animal
    if (employeeId){
        //PUT - update
        updateEmployee({
            id: employee.id,
            name: employee.name,
            locationId: parseInt(employee.locationId),
        })
        .then(() => history.push(`/employees/detail/${employee.id}`))
    }else {
        //POST - add
        addEmployee({
            name: employee.name,
            locationId: parseInt(employee.locationId),
        })
        .then(() => history.push("/employees"))
    }
    }
}

// Get locations. If employeeId is in the URL, getEmployeeById
useEffect(() => {
    getLocations().then(() => {
    if (employeeId) {
        getEmployeeById(employeeId)
        .then(employee => {
            setEmployee(employee)
            setIsLoading(false)
        })
    } else {
        setIsLoading(false)
    }
    })
}, [])

return (
    <form className="employeeForm">
    <h2 className="employeeForm__title">{employeeId ? "Edit Employee" : "Add Employee"}</h2>
    <fieldset>
        <div className="form-group">
        <label htmlFor="employeeName">Employee name: </label>
        <input type="text" id="name" required autoFocus className="form-control"
        placeholder="Employee name"
        onChange={handleControlledInputChange}
        value={employee.name}/>
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
        <label htmlFor="location">Assign to location: </label>
        <select value={employee.locationId} id="locationId" className="form-control" onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(location => (
            <option key={location.id} value={location.id}>
                {location.name}
            </option>
            ))}
        </select>
        </div>
    </fieldset>
    <button className="btn btn-primary"
        disabled={isLoading}
        onClick={event => {
        event.preventDefault() // Prevent browser from submitting the form and refreshing the page
        handleSaveEmployee()
        }}>
    {employeeId ? "Save Employee" : "Add Employee"}</button>
    </form>
)
}



