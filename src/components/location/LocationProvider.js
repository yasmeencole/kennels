import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const LocationContext = createContext()

// This component establishes what data can be used.
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const [ searchTerms, setSearchTerms ] = useState("")

     // useState([])  is to hold and set the array of locations
    // useState() hook to define a variable that holds the state of the component, and a function that updates it.

    const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(response => response.json())
        .then(locationsData => setLocations(locationsData))
}

    const addLocation = locationObj => {
    return fetch("http://localhost:8088/locations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(locationObj)
    })
    .then(response => response.json())
}
    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}?`)
            .then(response => response.json())
}

    const releaseLocation = locationId => {
        return fetch(`http://localhost:8088/locations/${locationId}`, {
            method: "DELETE"
        })
        .then(getLocations)
}


    const updateLocation = location => {
        return fetch(`http://localhost:8088/locations/${location.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
}
/*
    You return a context provider which has the
    `animals` state, `getAnimals` function,
    and the `addAnimal` function as keys. This
    allows any child elements to access them.
  */
    return (
    <LocationContext.Provider value={{
    //   animals: animals, 
    //   getAnimals: getAnimals
    locations, getLocations, addLocation, getLocationById, releaseLocation, updateLocation, searchTerms, setSearchTerms
    }}>
        {props.children}
        </LocationContext.Provider>
)
}