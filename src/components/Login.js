import React from "react";

const Login = () => {

    return <>
    <form>
        <table>
            <tbody>
                <tr>
                    <th>Create User Name</th>
                </tr>
                <tr>
                    <td>
                        <input type="text"
                        placeholder="Input Username" required>
                        </input>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    </>
}

export default Login