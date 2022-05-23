import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    return <>
    <div className="primary">
    <NavLink to='/'>Create Task</NavLink>
    <NavLink to='/alltasks'>All Tasks</NavLink>
    </div>
    </>
}

export default Navbar;