import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])
    // useState([])  is to hold and set the array of animal
    // useState() hook to define a variable that holds the state of the component, and a function that updates it.

    const getAnimals = () => {
    return fetch("http://localhost:8088/animals?_expand=location")
        .then(response => response.json())
        .then(animalsData => setAnimals(animalsData))
}

const addAnimal = animalObj => {
    return fetch("http://localhost:8088/animals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(animalObj)
    })
    .then(response => response.json())
}

const getAnimalById = (id) => {
    return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
        .then(res => res.json())
}

/*
    You return a context provider which has the
    `animals` state, `getAnimals` function,
    and the `addAnimal` function as keys. This
    allows any child elements to access them.
  */
    return (
    <AnimalContext.Provider value={{
    //   animals: animals, 
    //   getAnimals: getAnimals
        animals, getAnimals, addAnimal, getAnimalById
    }}>
        {props.children}
        </AnimalContext.Provider>
)
}