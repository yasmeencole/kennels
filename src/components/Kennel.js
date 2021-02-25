import React, { useState, useEffect } from "react"
import "./Kennel.css"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { Customer } from "./customer/Customer"
import { Location } from "./location/Location"
import { Employee } from "./employee/Employee"
import { PropsAndState } from "./PropsAndState"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

export const Kennel = () => { 

    let [counter, setCounter] = useState(1)

    const [kennel, setKennel] = useState({
        name: "Nashville Kennels: #1 in Davidson County",
        locations: [
            {
                name: "Nashville North",
                address: "500 Puppy Way, Nashville, TN 37210"
            }
        ]
    })

    const incrementCounter = () => {
        // debugger
        const newCounterValue = ++counter
    
        // DO NOT DO: counter = newCounterValue
        setCounter(newCounterValue)
        // console.log("counter", counter)
        // console.log("setCounter", setCounter)
    }

    return (

    <>
        <h2>{kennel.name}</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the {kennel.locations[0].name} Location</div>
            <div>{kennel.locations[0].address}</div>
        </address>
        <PropsAndState yourName="Yasmeen" />
        <article>
        <div>Currently helping #{counter}</div>
        <button onClick={incrementCounter}>Take a number</button>
        </article>
        {/* <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        <h2>Employees</h2> 
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>  
        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article> */}
        <AnimalProvider>
        <AnimalList />
        </AnimalProvider>
        <CustomerProvider>
        <CustomerList />
        </CustomerProvider>    
    </>    
    )
}
