import Home from "../components/Home";
import classes from './HomePage.module.css'
import React from "react";

const HomePage = () => {

    return <>
    <div className={classes.Container}>
    <div className={classes.Div}>
    <Home />
    </div>

    </div>
    
    </>
}

export default HomePage