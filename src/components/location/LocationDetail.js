import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById, releaseLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({})

    const {locationId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then((response) => {
        setLocation(response)
        })
    }, [])

    const handleRelease = () => {
        releaseLocation(location.id)
        .then(() => {
            history.push("/locations")
        })
    }

    return (
        <section className="location">
        <h3 className="location__name">{location?.name}</h3>
        <div className="location__location">Address: {location?.address}</div>

        {/* What's up with the question mark???? See below.*/}
        {/* ? is testing/trying to see if the location or customer property exist */}
        {/* <div className="animal__location">Location: {animal.location?.name}</div>
        <div className="animal__owner">Customer: {animal.customer?.name}</div> */}
        <button onClick={handleRelease}>Delete Location</button>
        <button onClick={() => { history.push(`/locations/edit/${location.id}`) }}>Edit</button>
        </section>
    )
}