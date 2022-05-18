import React from "react";

const Tasklist = (props) => {
    const {item, key} = props;



    return <>
        {Object.values(item).map((data) => {
            return <p>{data}</p>
        })}
    
    </>
}

export default Tasklist;