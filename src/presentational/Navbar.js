import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    return <>
    <div className="primary">
    <NavLink to="/">Home</NavLink>
    <NavLink to='/create'>Create Task</NavLink>
    <NavLink to='/alltasks'>All Tasks</NavLink>
    <NavLink to="/login">Login</NavLink>
    </div>
    </>
}

export default Navbar;