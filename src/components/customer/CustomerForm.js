import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Customer.css"
import { useHistory, useParams } from 'react-router-dom';


export const CustomerForm = () => {
    const { addCustomer, getCustomerById, updateCustomer } = useContext(CustomerContext)
    const { getCustomers } = useContext(CustomerContext)
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [customer, setCustomer] = useState({
        name: "",
        address: "",
        email: "",
        customerId: 0
        // locationId: 0,
    });

    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
const [isLoading, setIsLoading] = useState(true);

// Now that the form can be used for editing as well as adding an customer, you need access to the customer id for fetching the customer you want to edit
const { customerId } = useParams();
const history = useHistory();

//when field changes, update state. This causes a re-render and updates the view.
//Controlled component
const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newCustomer = { ...customer }
    //animal is an object with properties.
    //set the property to the new value
    newCustomer[event.target.id] = event.target.value
    //update state
    setCustomer(newCustomer)
}

const handleSaveCustomer = () => {
    if (parseInt(customer.locationId) === 0) {
        window.alert("Please select a location")
    } else {
    //disable the button - no extra clicks
    setIsLoading(true);
    // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an animal
    if (customerId){
        //PUT - update
        updateCustomer({
            id: customer.id,
            name: customer.name,
            address: customer.address,
            email: customer.email,
            customerId: parseInt(customerId)
            // locationId: parseInt(customer.locationId),
        })
        .then(() => history.push(`/customers/detail/${customer.id}`))
    }else {
        //POST - add
        addCustomer({
            name: customer.name,
            address: customer.address,
            email: customer.email,
            customerId: parseInt(customerId)
            // locationId: parseInt(customer.locationId),
        })
        .then(() => history.push("/customers"))
    }
    }
}

// Get locations. If customerId is in the URL, getCustomerById
useEffect(() => {
    getCustomers().then(() => {

        // if there is data
    if (customerId) {
        getCustomerById(customerId)
        .then(customer => {
            setCustomer(customer)
            setIsLoading(false)
        })
    } else {
        // else there is no data
        setIsLoading(false)
    }
    })
}, [])

return (
    <form className="customerForm">
    <h2 className="customerForm__title">{customerId ? "Edit Customer" : "Add Customer"}</h2>
    <fieldset>
        <div className="form-group">
        <label htmlFor="customerName">Customer name: </label>
        <input type="text" id="name" required autoFocus className="form-control"
        placeholder="Customer name"
        onChange={handleControlledInputChange}
        value={customer.name}/>
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
        <label htmlFor="customerAddress">Customer Address: </label>
        <input type="text" id="address" required autoFocus className="form-control"
        placeholder="Customer Address"
        onChange={handleControlledInputChange}
        value={customer.address}/>
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
        <label htmlFor="customerEmail">Email: </label>
        <input type="text" id="email" required autoFocus className="form-control"
        placeholder="Customer Email"
        onChange={handleControlledInputChange}
        value={customer.email}/>
        </div>
    </fieldset>

    {/* <fieldset>
        <div className="form-group">
        <label htmlFor="location">Assign to location: </label>
        <select value={customer.locationId} id="locationId" className="form-control" onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(location => (
            <option key={location.id} value={location.id}>
                {location.name}
            </option>
            ))}
        </select>
        </div>
    </fieldset> */}
    <button className="btn btn-primary"
        disabled={isLoading}
        onClick={event => {
        event.preventDefault() // Prevent browser from submitting the form and refreshing the page
        handleSaveCustomer()
        }}>
    {customerId ? "Save Customer" : "Add Customer"}</button>
    </form>
)
}



