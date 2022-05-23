import React, { useEffect } from "react";
import classes from './Tasklist.module.css'

const Tasklist = (props) => {
    const { item, logID, handleEditClick, deleteTask } = props;

    const values = Object.values(item)

    return <>
        <div className={classes.div}>
            <table className={classes.table}>
                <tbody>
                    <tr >
                        <th className={classes.tablehead}>Task Name</th>
                        <th className={classes.tablehead}>Task Description</th>
                        <th className={classes.tablehead3}>Task Date</th>
                    </tr>
                    <tr>
                        <td className={classes.tabledata}>{values[0]}</td>
                        <td className={classes.tabledata}>{values[1]}</td>
                        <td className={classes.tabledata3}>{values[2]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default Tasklist;