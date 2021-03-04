// import React, { useEffect, useContext } from "react"
// import { AnimalCard } from "./AnimalCard"
// import "./Animal.css"
// import { AnimalContext } from "./AnimalProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
// import { useHistory } from "react-router-dom";

// export const AnimalList = () => {

//     // const history = useHistory()
//     // This state changes when `getAnimals()` is invoked below
//     const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
//     const { locations, getLocations } = useContext(LocationContext)
//     const { customers, getCustomers } = useContext(CustomerContext)

//      // Since you are no longer ALWAYS displaying all of the animals
//     const [ filteredAnimals, setFiltered ] = useState([])
//     const history = useHistory()


//     useEffect(() => {
//         console.log("Fetching animals data from API")
//         getLocations()
//         .then(getCustomers)
//         .then(getAnimals)
//     }, [])

//       // useEffect dependency array with dependencies - will run if dependency changes (state)
//   // searchTerms will cause a change
//     useEffect(() => {
//         if (searchTerms !== "") {
//         // If the search field is not blank, display matching animals
//         const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
//         setFiltered(subset)
//         } else {
//         // If the search field is blank, display all animals
//         setFiltered(animals)
//         }
//     }, [searchTerms, animals])

//     return (
//     <>
//         <h4>Animals</h4>
//         <button onClick={() => { history.push("/animals/create") }}>Add Animal</button>
//         <article className="animals">
//         {
//             animals.map(animalObject => {
//                 const owner = customers.find(customer => customer.id === animalObject.customerId)
//                 const location = locations.find(location => location.id === animalObject.locationId)
//             return <AnimalCard key={animalObject.id} animalProps={animalObject} owner={owner} location={location} />
//         })
//         }
//         </article>
//     </>
// )
// }

import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {
const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

// Since you are no longer ALWAYS displaying all of the animals
const [ filteredAnimals, setFiltered ] = useState([])
const history = useHistory()

// Empty dependency array - useEffect only runs after first render
useEffect(() => {
    getAnimals()
}, [])

// useEffect dependency array with dependencies - will run if dependency changes (state)
// searchTerms will cause a change
useEffect(() => {
if (searchTerms !== "") {
    // If the search field is not blank, display matching animals
    const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
    setFiltered(subset)
} else {
    // If the search field is blank, display all animals
    setFiltered(animals)
}
}, [searchTerms, animals])

return (
<>
    <h1>Animals</h1>

    <button onClick={() => history.push("/animals/create")}>
        Add Animal
    </button>
    <div className="animals">
    {
    filteredAnimals.map(animal => {
        return <AnimalCard key={animal.id} animal={animal} />
    })
    }
    </div>
</>
)
}