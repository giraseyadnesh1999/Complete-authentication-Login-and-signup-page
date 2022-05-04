import React from 'react';
import Login from './Login';
import Home from "./Utils/home";
import Signup from './Signup';
import ErrorPage from '../src/Errorpage'
import PrivateRoute from './Utils/PrivateRoute';
import "./New.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Dashboard from './Dashboard';
import PublicRoute from './Utils/PublicRoute';

const App = () => {
    return (
        <>
            <div className="App" >
                <Router>
                    <nav className="header">
                        <NavLink to="/" style={{ fontSize: "30px" }}>Home</NavLink>
                        <NavLink to="/Signup" style={{fontSize:"30px"}}>Signup</NavLink>
                        <NavLink to="/Login" style={{ fontSize: "30px" }}>Login</NavLink>
                        <NavLink to="/Dashboard" style={{ fontSize: "30px" }}>Dashboard</NavLink>
                    </nav>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                           <Route path='/Signup' element={<Signup/>}></Route>

                            {/* <Route path="/Login" element={<Login/>}></Route>  */}
                            {/* <Route path="/Dashboard" element={<Dashboard/>}></Route> */}
                            <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>}></Route>
                            <Route path="/Dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>}></Route>
                            <Route path="*" element={<ErrorPage />}></Route>
                        </Routes>
                    </div>
                </Router>
            </div>
        </>
    )
}
export default App;