import React from "react";
import classes from './TaskEdit.module.css'

const TaskEdit = (props) => {

    const {
        currentTask,
        handleTaskNameChange,
        handleTaskDescriptionChange,
        handleTaskDateChange,
        handleEditSubmit
    } = props;


    return <>

        <form onSubmit={handleEditSubmit}>
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
                                type="text"
                                value={currentTask.taskName}
                                onChange={handleTaskNameChange}
                            >

                            </input></td>
                            <td className={classes.tabledata}><input
                                type="text"
                                value={currentTask.taskDescription}
                                onChange={handleTaskDescriptionChange}>

                            </input></td>
                            <td className={classes.tabledata3}><input
                                type="text"
                                value={currentTask.taskDate}
                                onChange={handleTaskDateChange}>

                            </input></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button type="submit" className={classes.button}>Submit Edit</button>

        </form>



    </>
}

export default TaskEdit