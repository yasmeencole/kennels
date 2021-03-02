import React, { useEffect, useContext } from "react"
import { Location } from "./Location"
import "./Location.css"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)


    useEffect(() => {
    console.log("Fetching locations data from API")
    getLocations()
    }, [])

    return (
    <>
        <h4>Locations</h4>
        <article className="locations">
        {
            locations.map(locationsObject => {
            return <Location key={locationsObject.id} locationProps={locationsObject} />
        })
        }
        </article>
    </>
)
}