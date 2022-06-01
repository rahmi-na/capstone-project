import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CService from '../assets/CSMaturedi.png';
import '../style/CustomerService.css';

function CustomerService() {
  return (
    <div>
        <Navbar/>
        <div className='customerService' style={{ backgroundImage: `url(${CService})`}}></div>
        <Footer/>
    </div>
  )
}

export default CustomerService