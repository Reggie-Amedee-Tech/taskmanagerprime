import React from "react";
import classes from './Home.module.css'
import { NavLink } from "react-router-dom";

const Home = () => {


    return <>
    <div className={classes.Div}>
    <h1 style={{margin: "0px"}}>A Productivity Application</h1>
    <h1 style={{fontSize: '4rem'}}>Welcome to Task List Prime</h1>

    <NavLink to='login' className={classes.NavLink}>Sign In</NavLink>
    </div>
    
    
    </>
}

export default Home;