import React from 'react'
import './CSS/SignUp.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function SignUp ()  {

  const [formdata , setFormData] = useState({
    "username":"",
    "email": "",
    "password": "",
    "c_password": "", 
  })
  const [errors, setErrors] = useState({});

  async function signup(){
    const { username, email, password, c_password } = formdata;
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!isValidEmail(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    if (!c_password) newErrors.c_password = 'Confirmation password is required';
    else if (!pwdMatching()) newErrors.c_password = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("signup" ,formdata);
    let response;
    await fetch('http://localhost:4000/signup' ,{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formdata)
    }).then((response)=> response.json()).then((data)=>response=data);

    if(response.success){
      localStorage.setItem('auth-token' , response.token);
      window.location.replace("/");
    }else{
      alert(response.error);
    }
  }

 function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',  // Clear errors when user starts typing
    }));
  }

  function pwdMatching(){
    return(formdata.password === formdata.c_password);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }



  return (
    <div className='signup'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-field">
          <input className={errors.username ? 'shake' : ''} type='text' onChange={handleChange} value = {formdata.username} name = "username" placeholder='Username'/>
          {errors.username && <p className='error'>{errors.username}</p>}
          <input className={errors.email ? 'shake' : ''} type='email' onChange={handleChange} value = {formdata.email} name = "email" placeholder='example@email.com'/>
          {errors.email && <p className='error'>{errors.email}</p>}
          <input className={errors.password ? 'shake' : ''} type='password' onChange={handleChange} value = {formdata.password} name = "password" placeholder='password'/>
          {errors.password && <p className='error'>{errors.password}</p>}
          <input className={errors.c_password ? 'shake' : ''} type='password' onChange={handleChange} value = {formdata.c_password} name = "c_password" placeholder='confirm password'/>
          {errors.c_password && <p className='error'>{errors.c_password}</p>}
          {/* {formdata.password&&formdata.c_password? (pwdMatching()?  <p className='match'>Password matched</p>:<p className='not-match'>Password does not match</p>) : null} */}
        </div>
        <button onClick={signup}>Continue</button>
        <p className='signup-to-login'>Already have an account? <Link to='/login'><span>Login here</span></Link></p>
        <div className='signup-agree'>
          <input type='checkbox' name='' id = '' />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
