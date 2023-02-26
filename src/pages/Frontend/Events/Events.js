import { setDoc, doc, serverTimestamp } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import { firestore } from '../../../config/firebase';
const initialState = { title: "", location: "", creator: "", time: "", description: "" }
export default function Events() {
  const [state, setState] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState(s => ({ ...s, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { title, location, creator, time, description } = state;
    let randomId = Math.random().toString(36).slice(2);
    setIsProcessing(true);
    try {
      await setDoc(doc(firestore, "userData", randomId), { title, location, creator, time, description, id: randomId, dateCreated: serverTimestamp() });
    }
    catch (e) {
      console.error(e)
    }
    users.push(state);
    setUsers(users);
    setIsProcessing(false);

  }
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card p-3 p-md-4 p-lg-5 px-5 my-5 rounded-0 border-secondary" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
              <h2 className='text-center'>User Data</h2>
              <form onSubmit={handleSubmit}>
                <div className="row my-3">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <input type="text" name='title' placeholder='Title' className='form-control rounded-0 border-dark' onChange={handleChange} />
                  </div>
                  <div className="col-12 col-md-6">
                    <input type="text" name='location' placeholder='Location' className='form-control rounded-0 border-dark' onChange={handleChange} />
                  </div>
                </div>
                <div className=" my-3">
                  <div className="col-12">
                    <input type="text" name='creator' placeholder='Creator' className='form-control rounded-0 border-dark' onChange={handleChange} />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12 col-md-6 ">
                    <input type="date" name='date' placeholder='Date' className='form-control rounded-0 border-dark mb-3 mb-md-0' onChange={handleChange} />
                  </div>
                  <div className="col-12 col-md-6">
                    <input type="time" name='time' placeholder='Time' className='form-control rounded-0 border-dark' onChange={handleChange} />
                  </div>
                </div>
                <textarea name="description" placeholder='Description' className='form-control rounded-0 border-dark' cols="46" row="46" onChange={handleChange}></textarea>
                <div className='text-center my-3'>
                  <button className='btn btn-primary w-100 rounded-0'>{!isProcessing
                    ? "Add User Data"
                    : <div className='spinner-grow'></div>
                  }</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center'>Events</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at cupiditate vel assumenda quod quis optio, voluptas similique exercitationem architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, iure? Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12  col-md-4">
            <div className="card my-md-0 rounded-0" style={{ width: "16rem" }}>
              <img src="https://source.unsplash.com/800x500/?event" className="card-img-top rounded-0" alt='...' />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-12  col-md-4">
            <div className="card my-md-0 rounded-0" style={{ width: "16rem" }}>
              <img src="https://source.unsplash.com/800x500/?random" className="card-img-top rounded-0" alt='...' />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-12  col-md-4">
            <div className="card my-md-0 rounded-0 " style={{ width: "16rem" }}>
              <img src="https://source.unsplash.com/800x500/?events" className="card-img-top rounded-0" alt='...' />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
