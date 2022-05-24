import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";


const Navbar = () => {
    

    const navigate = useNavigate()
    const auth = useAuth()

    const logout = () => {
        auth.logout()
        navigate('/')
    }

    

    return <>
    <div className="primary">
    <NavLink to="/">Home</NavLink>
    <NavLink to='/create'>Create Task</NavLink>
    <NavLink to='/alltasks'>All Tasks</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/" onClick={logout}>Logout</NavLink>
    </div>
    </>
}

export default Navbar;