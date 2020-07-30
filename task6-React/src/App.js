import React from 'react';
import './App.css';
import MainPage from "./components/MainPage/MainPage.component";
import EmployeesPage from "./components/Employees/EmployeesPage.container";
import {BrowserRouter, NavLink, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <NavLink to="/"> Main </NavLink>
                    <NavLink to="/employees"> Employees </NavLink>
                </header>
                <div >
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/employees" component={EmployeesPage}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
