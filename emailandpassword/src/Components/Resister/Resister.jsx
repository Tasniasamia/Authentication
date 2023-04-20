import React, { useRef, useState } from 'react';

import {getAuth,createUserWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase';
import { Link } from 'react-router-dom';

const Resister = () => {
    
const auth = getAuth(app);
//errorState
const[error,setError]=useState('');
const[success,setSuccess]=useState('')
    //signup/resister by email and password
  //Reset Email
  const emailref=useRef('')
  function reset() {
    const email=emailref.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
  .then(() => {
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  } 
    function submit(event){
       
        event.preventDefault();
        setError("");
        setSuccess("");
const email=event.target.email.value;
const password=event.target.password.value;
// console.log(email,password);
if(!/(?=.*[A-Z])/.test(password)){
    setError("have to contain one uppercase");
    return;
}
else if(!/(?=.*[a-z])/.test(password)){
    setError('have to contain one lowercase');
    return;
}
else if(password.length<=8){
  setError("It have to  8 characters");
}
else if(!/(?=.*?[#?!@$%^&*-])/){
setError("It have to a special character");
}
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //verification email
    sendEmailVerification(user)
  .then(() => {
    // Email verification sent!
    // ...
  });
    console.log(user);
    setSuccess("user has submited successfully");
setError(" ");
event.target.reset();
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    setSuccess(" ");
    setError(errorMessage);
    console.log(errorMessage);
    // ..
  });
  
    }
    return (
        <div className='mx-5 my-5'>
           
        <h4>Resister</h4>
        <form className='w-50' onSubmit={submit}>
                  {/* i have to use name: property into email and password */}
            <input className='w-50 my-4'ref={emailref}  type="email" name="email" id="email" placeholder='email'required/>
          <br />
            <input className='w-50 mb-2'  type="password" name="password" id="password"placeholder='password'required />
            <br />
            <p onClick={reset}>Reset your Password</p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>
            <input  type="submit" value="Resister" />
            <p>Do you have an account? <Link to="/Login">Login</Link> </p>
        </form>
    </div>
    );
};

export default Resister;