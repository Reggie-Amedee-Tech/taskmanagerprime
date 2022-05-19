import React, { useEffect } from "react";

const Tasklist = (props) => {
    const {item, logID} = props;

   const values = Object.values(item)

    return <>
    <div>
        <p>{values[0]}</p>
        <p>{values[1]}</p>
        <p>{values[2]}</p>

        </div>
    </>
}

export default Tasklist;