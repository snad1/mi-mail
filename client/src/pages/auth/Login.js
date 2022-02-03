import React, {useState} from "react";
import {Link} from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()


    }

    return <div className="form">
        <h1>Hi! Please Login</h1>
        <form className="login" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter email" defaultValue={email}
                   onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter password" defaultValue={password}
                   onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit" className="submit"> Login</button>
        </form>
        <p>New User? <Link to="register">Create an Account</Link></p>
    </div>
}

export default Login