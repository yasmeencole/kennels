import React, { useEffect, useContext, useState } from "react"
import { Location } from "./Location"
import "./Location.css"
import { LocationContext } from "./LocationProvider"
import { useHistory } from "react-router-dom"


export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
    const { locations, getLocations, searchTerms } = useContext(LocationContext)

    const [ filteredLocations, setFiltered ] = useState([])
    const history = useHistory()


    useEffect(() => {
    console.log("Fetching locations data from API")
    getLocations()
    }, [])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
// searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching locations
            const subset = locations.filter(location => location.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all locations
            setFiltered(locations)
        }
        }, [searchTerms, locations])

    return (
    <>
        <h4>Locations</h4>
        <button onClick={() => history.push("/locations/create")}>Add Location</button>
        <div className="locations">
        {
        filteredLocations.map(location => {
            return <Location key={location.id} location={location} />
        })
        }
        </div>
    </>
)
}