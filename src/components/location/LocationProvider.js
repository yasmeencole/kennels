import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const LocationContext = createContext()

// This component establishes what data can be used.
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(response => response.json())
        .then(locationsData => setLocations(locationsData))
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
    locations, getLocations
    }}>
        {props.children}
        </LocationContext.Provider>
)
}