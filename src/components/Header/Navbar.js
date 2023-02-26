import React, { useContext } from 'react'
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../contexts/AuthContext';
export default function Navbar() {

  const { isAuthenticated, dispatch } = useContext(AuthContext);
  const handleLogOut=()=>{
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" })
      })
      .catch(err => {
        console.error(err)
      })
      window.toastify("Sign Out Successfully","success")
  }
  // console.log(isAuthenticated);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to='/'><img src={logo2} className='rounded-5' width={50} height={50} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/events'>Events</Link>
              </li>
            </ul>
            {!isAuthenticated
              ? <>
                <Link to='/auth/login'><button className='btn text-light rounded-0 me-2' style={{backgroundColor:"#118499"}}>Login</button></Link>
                <Link to='/auth/register'><button className='btn text-light rounded-0' style={{backgroundColor:"#118499"}}>Register</button></Link>
              </>
              : <>
                <button className='btn text-light rounded-0' style={{backgroundColor:"#118499"}} onClick={handleLogOut}>Log Out</button>
              </>

            }

          </div>
        </div>
      </nav>
    </>
  )
}
