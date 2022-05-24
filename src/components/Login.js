import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace: true})
    }


    return <>
        
        <table>
            <tbody>
                <tr>
                    <th>Create User Name</th>
                </tr>
                <tr>
                    <td>
                        <input type="text"
                        placeholder="Input Username" 
                        onChange={(e) => setUser(e.target.value)}
                        
                        required>
                        </input>
                    </td>
                </tr>
            </tbody>
        </table>
        <button onClick={handleLogin}>Sign In </button>
    
    </>
}

export default Login