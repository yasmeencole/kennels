import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useHistory } from 'react-router-dom';

export const AnimalForm = () => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    });

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
    getCustomers().then(getLocations)
    }, [])

    const history = useHistory();


    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newAnimal = { ...animal }

        let selectedValue = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
        if (event.target.id.includes("Id")) {
            selectedValue = parseInt(selectedValue)
        }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newAnimal[event.target.id] = selectedValue
        // update state
        setAnimal(newAnimal)
    }

  //when a field changes, update state. The return will re-render and display based on the values in state
      // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
  //Controlled component
    const handleClickSaveAnimal = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
    
        const locationId = parseInt(animal.locationId)
        const customerId = parseInt(animal.customerId)
    
        if (locationId === 0 || customerId === 0) {
            window.alert("Please select a location and a customer")
        } else {
          //invoke addAnimal passing animal as an argument.
          //once complete, change the url and display the animal list
            addAnimal(animal)
            .then(() => history.push("/animals"))
        }
    }

    const handleNameInputChange = (event) => {
        const newAnimal = {
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId
        }

        newAnimal.name = event.target.value
        setAnimal(newAnimal)
    }

    const handleBreedInputChange = (event) => {
        const newAnimal = {
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId
    }
        newAnimal.breed = event.target.value
        setAnimal(newAnimal)
    }

    const handleLocationInputChange = (event) => {
        const newAnimal = {
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId
        }
        newAnimal.locationId = parseInt(event.target.value)
        setAnimal(newAnimal)
    }

    const handleCustomerInputChange = (event) => {
        const newAnimal = {
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId
        }
        newAnimal.customerId = parseInt(event.target.value)
        setAnimal(newAnimal)
    }

    return (
    <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Animal name:</label>
                <input type="text" id="name" onChange={handleNameInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name}/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="breed">Animal breed:</label>
                <input type="text" id="breed" onChange={handleBreedInputChange} required className="form-control" placeholder="Animal breed" value={animal.breed}/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" onChange={handleLocationInputChange} className="form-control" value={animal.locationId}>
                        <option value="0">Select a location</option>
                        {locations.map(location => (
                            <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
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
        </fieldset>
        <button className="btn btn-primary" onClick={handleClickSaveAnimal}>Save Animal</button>
    </form>
    )
}
