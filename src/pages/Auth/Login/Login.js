import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../config/firebase'

const initialState = { email: "", password: "" }

export default function Login() {
  
  const navigate=useNavigate();
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState(s => ({ ...s, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('Sign in =>',user)
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.error(error);
      });
      window.toastify("SuccessFully Log in","success");
      navigate('/');
  }
  
  return (
    <>
      <div className="auth">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="card p-4">
                <form onSubmit={handleSubmit}>
                  <h2 className='my-3'>Login</h2>
                  <div className="input-group">
                    <input type="email" name='email' required onChange={handleChange}/>
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-group">
                    <input type="password" name='password' required onChange={handleChange}/>
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="text-center">
                  <button className='btn w-50 border border-info' style={{ color: "#118499" }}>Sign In</button>
                  </div>
                  <div className="Account-link">
                    <Link to='/auth/login' className='mb-0 text-dark'>Already have an account?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
