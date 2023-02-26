import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { auth } from '../../../config/firebase';
const initialState={email:"",password:""}
export default function Register() {
    const [state,setState]=useState(initialState);
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setState(s=>({...s,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        let {email,password}=state;
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.error(error);
    // ..
  });
    }
  return (
    <>
    <div className="auth">
      <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="card p-4">
                            <form onSubmit={handleSubmit}>
                                <h2 className='my-3'>Register</h2>
                                <div className="input-group">
                                    <input type="email" name='email' required onChange={handleChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" name='password' required onChange={handleChange}/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="remember">
                                    <label htmlFor="checkbox"><input type="checkbox" name='checkbox' /> I agree to the terms & conditions</label>
                                </div>
                                <div className="text-center">
                                <button className='btn w-100' style={{backgroundColor:"#118499"}}>Register</button>
                                </div>
                            </form>
                                <div className="Account-link">
                                    <Link to='/auth/login' className='mb-0 text-dark'>Already have an account?</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}
