import React, {useState} from "react";
import {Link} from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()


  }
  return <div className= "form">
    <h2>Welcome. Please SignUp to Register</h2>
    <form className="login" onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter email" defaultValue={email}
             onChange={(e)=> setEmail(e.target.value)}/>
      <input type="password" placeholder="Enter password" defaultValue={password}
             onChange={(e)=> setPassword(e.target.value)}/>
      <button type='submit' className='submit'> Sign Up</button>
    </form>
    <p>Already have an account? <Link to="login">Sign in</Link></p>

  </div>
}

export default Register