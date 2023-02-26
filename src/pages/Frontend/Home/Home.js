import React from 'react'
import image1 from '../../../assets/images/event1.jpg';
import {Link} from 'react-router-dom';
export default function Home() {
    return (
        <>
            <div className='position-relative'>
                <div className="position-absolute ">
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <div class="card m-5 w-100 px-5 rounded-0">
                                <div class="card-body">
                                    <h3 class="card-title">Event Planner</h3>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to='/events' className='btn text-light rounded-0' style={{backgroundColor:"#118499"}}>Events</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={image1} className='image-fluid' alt='...' style={{ width: "100%", height: 500 }} />
            </div>
        </>
    )
}
