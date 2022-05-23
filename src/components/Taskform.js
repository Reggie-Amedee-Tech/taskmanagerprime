import React from 'react'
import classes from './Taskform.module.css'

const Taskform = (props) => {

    const {
        taskName,
        setTaskName,
        taskDescription,
        setTaskDescription,
        taskDate,
        setTaskDate,
        onSubmitHandler
    } = props;



    return <>
        <form onSubmit={onSubmitHandler}>
            <div className={classes.Div}>
            <table className={classes.table}>
                <tbody>
                    <tr>
                        <th className={classes.tablehead}>Task Name</th>
                        <th className={classes.tablehead}>Task Description</th>
                        <th className={classes.tablehead3}>Task Date</th>
                    </tr>
                    <tr>
                        <td className={classes.tabledata}><input
                            type='text'
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            placeholder="Input Task name"
                            className={classes.input}>
                        </input></td>
                        <td className={classes.tabledata}><input
                            type='text'
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            placeholder="Input Task description"
                            className={classes.input}>
                        </input></td>
                        <td className={classes.tabledata3}><input
                            type='date'
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            placeholder="Select Task date"
                            className={classes.input}>
                        </input></td>  
                    </tr>
                </tbody>
            </table>
            <button type='submit' className={classes.button}>Submit Task</button>
            </div>

        </form>
    </>
}

export default Taskform;