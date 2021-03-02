import React, { useEffect, useContext } from "react"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { useHistory } from "react-router-dom";



export const AnimalList = () => {

    const history = useHistory()
  // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("Fetching animals data from API")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

    return (
    <>
        <h4>Animals</h4>
        <button onClick={() => { history.push("/animals/create") }}>Add Animal</button>
        <article className="animals">
        {
            animals.map(animalObject => {
                const owner = customers.find(customer => customer.id === animalObject.customerId)
                const location = locations.find(location => location.id === animalObject.locationId)
            return <AnimalCard key={animalObject.id} animalProps={animalObject} owner={owner} location={location} />
        })
        }
        </article>
    </>
)
}