// This will define all of the URLs your application will support and which views will be displayed for each one.

import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { LocationList } from "./location/LocationList";
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationProvider } from "./location/LocationProvider";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./employee/EmployeeForm";
import { CustomerForm } from "./customer/CustomerForm";
import { LocationForm } from "./location/LocationForm";
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { CustomerDetail } from "./customer/CustomerDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalSearch } from "./animal/AnimalSearch"
import { EmployeeSearch } from "./employee/EmployeeSearch";
import { CustomerSearch } from "./customer/CustomerSearch";
import { LocationSearch } from "./location/LocationSearch";


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the locations list when http://localhost:3000/locations */}
                <LocationProvider>
                    <Route exact path="/locations">
                        <LocationSearch />
                        <LocationList />
                    </Route>
                    <Route path="/locations/create">
                        <LocationForm />
                    </Route>
                    <Route path="/locations/detail/:locationId(\d+)">
                        <LocationDetail/>
                    </Route>
                    <Route path="/locations/edit/:locationId(\d+)">
                        <LocationForm />
                    </Route>        
                </LocationProvider>    
            
            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route exact path="/animals">
                            <AnimalSearch />
                            <AnimalList />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail/>
                        </Route>
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </AnimalProvider>
                </LocationProvider>
            </CustomerProvider>

            {/* Render the customer list when http://localhost:3000/customers */}
                <CustomerProvider>
                    <Route exact path="/customers">
                        <CustomerSearch />
                        <CustomerList />
                    </Route>
                    <Route path="/customers/create">
                        <CustomerForm />
                    </Route>
                    <Route path="/customers/detail/:customerId(\d+)">
                        <CustomerDetail/>
                    </Route>
                    <Route path="/customers/edit/:customerId(\d+)">
                        <CustomerForm />
                    </Route>
                </CustomerProvider>

            {/* Render the employees list when http://localhost:3000/employees */}
                <LocationProvider>
                    <EmployeeProvider>
                        <Route exact path="/employees">
                            <EmployeeSearch />
                            <EmployeeList />
                        </Route>
                        <Route path="/employees/create">
                            <EmployeeForm />
                        </Route>
                        <Route path="/employees/detail/:employeeId(\d+)">
                            <EmployeeDetail/>
                        </Route>
                        <Route path="/employees/edit/:employeeId(\d+)">
                            <EmployeeForm />
                        </Route>
                    </EmployeeProvider>
                </LocationProvider>


        </>
    )
}