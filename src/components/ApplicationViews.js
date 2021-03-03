// This will define all of the URLs your application will support and which views will be displayed for each one.

import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./employee/EmployeeForm";


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the locations list when http://localhost:3000/locations */}
                <LocationProvider>
                    <Route path="/locations">
                        <LocationList />
                    </Route>
                </LocationProvider>    
            
            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </AnimalProvider>
                </LocationProvider>
            </CustomerProvider>

            {/* Render the customer list when http://localhost:3000/customers */}
                <CustomerProvider>
                    <Route path="/customers">
                        <CustomerList />
                    </Route>
                </CustomerProvider>

            {/* Render the employees list when http://localhost:3000/employees */}
                <LocationProvider>
                    <EmployeeProvider>
                        <Route exact path="/employees">
                            <EmployeeList />
                        </Route>
                        <Route path="/employees/create">
                                <EmployeeForm />
                            </Route>
                    </EmployeeProvider>
                </LocationProvider>


        </>
    )
}