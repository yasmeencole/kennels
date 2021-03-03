import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom';


export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
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

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
    getLocations()
    }, [])

    const history = useHistory();


    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEmployee = { ...employee }

        let selectedValue = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
        if (event.target.id.includes("Id")) {
            selectedValue = parseInt(selectedValue)
        }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEmployee[event.target.id] = selectedValue
        // update state
        setEmployee(newEmployee)
    }

  //when a field changes, update state. The return will re-render and display based on the values in state
      // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
  //Controlled component
    const handleClickSaveEmployee = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
    
        const locationId = parseInt(employee.locationId)
        const customerId = parseInt(employee.customerId)
    
        if (locationId === 0 || customerId === 0) {
            window.alert("Please select a employee and a location")
        } else {
          //invoke addAnimal passing animal as an argument.
          //once complete, change the url and display the animal list
            addEmployee(employee)
            .then(() => history.push("/employees"))
        }
    }

    const handleNameInputChange = (event) => {
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            customerId: employee.customerId
        }

        newEmployee.name = event.target.value
        setEmployee(newEmployee)
    }

    const handleLocationInputChange = (event) => {
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            customerId: employee.customerId
        }
        newEmployee.locationId = parseInt(event.target.value)
        setEmployee(newEmployee)
    }

    // const handleCustomerInputChange = (event) => {
    //     const newEmployee = {
    //         name: animal.name,
    //         breed: animal.breed,
    //         locationId: animal.locationId,
    //         customerId: animal.customerId
    //     }
    //     newAnimal.customerId = parseInt(event.target.value)
    //     setAnimal(newEmployee)
    // }

    return (
    <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Employee name:</label>
                <input type="text" id="name" onChange={handleNameInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" onChange={handleLocationInputChange} className="form-control" value={employee.locationId}>
                        <option value="0">Select a location</option>
                        {locations.map(location => (
                            <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer: </label>
                    <select value={animal.customerId} name="customer" id="customerId" onChange={handleCustomerInputChange} className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(customer => (
                            <option key={customer.id} value={customer.id}>
                                {customer.name}
                            </option>
                        ))}
                    </select>
                </div>
        </fieldset> */}
        <button className="btn btn-primary" onClick={handleClickSaveEmployee}>Save Employee</button>
    </form>
    )
}
