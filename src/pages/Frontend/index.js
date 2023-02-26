import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import About from './About/About';
import Events from './Events';
import Home from './Home';

export default function Index() {
  return (
    <>
    <Navbar/>
    <main>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}
