import React, { useState } from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom';
function Login ()  {

  const [formdata , setFormData] = useState({
    "email": "",
    "password": "", 
  })
  async function login(){
    console.log("login" ,formdata);
    let response;
    await fetch('http://localhost:4000/login' ,{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formdata)
    }).then((response)=> response.json()).then((data)=>response=data);
    console.log(response);
    if(response.success){
      localStorage.setItem('auth-token' , response.token);
      window.location.replace("/");
    }else{
      alert(response.error);
    }

  }

  function handleChange(event){
    const {name , value} = event.target;
    setFormData((prevData)=>({
        ...prevData,
        [name]: value

    }));
  }

  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-field">
          <input onChange = {handleChange} name = "email" value = {formdata.email} type='email' placeholder='example@email.com'/>
          <input onChange = {handleChange} name = "password" value ={formdata.password} type='password' placeholder='password'/>
        </div>
        <button onClick={login}>Login</button>
        <p className='login-to-signup'>Do not have an account? <Link to ='/signup'><span>Signup here</span></Link></p>
      </div>
    </div>
  )
}

export default Login;
