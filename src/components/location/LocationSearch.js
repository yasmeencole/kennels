import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

//this section creates a search bar that searches as you type
export const LocationSearch = () => {
    const { setSearchTerms } = useContext(LocationContext)

    return (
        <>
        Location search:
        <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a location... " />
        </>
    )
}