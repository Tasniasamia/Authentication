import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase';

const Login = () => {
    
const auth = getAuth(app);

    //just get email value but not work for firebase
    const[emails,setEmail]=useState('');
    function email(event){
let email2=event.target.value;
setEmail(email2);
        console.log(email2);
    }
    //just get password value but not work for firebase
    const[passwords,setPassword]=useState('');
    function password(event){
        let password2=event.target.value;
        setPassword(password2);
        console.log(password2);

    }
    //it work for firebase
    const[error,setError]=useState('');
    const[success,setSuccess]=useState('');
    function submit(event){
        setError("");
        setSuccess("");
event.preventDefault();
 let email22=event.target.email.value;
let password22=event.target.password.value;
console.log(email22,password22);
signInWithEmailAndPassword(auth, email22, password22)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setError("");
    setSuccess("user has submited successfully");
    event.target.reset();

    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    setError(errorMessage);
  });

    }

    // console.log(fulldata);
    return (
        <div className='mx-5 my-5'>
            <p>Login</p>
            <form className='w-50' onSubmit={submit}>
        
            <input className='w-50 my-4'  type="email" name="email" id="email" placeholder='email'required/>
          <br />
            <input className='w-50 mb-2'  type="password" name="password" id="password"placeholder='password'required />
            <br />
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>
            <input  type="submit" value="Resister" />
            </form>
            <p>Don't have an account? <Link to="/Resister">Sign up</Link> </p>
        </div>
    );
};

export default Login;