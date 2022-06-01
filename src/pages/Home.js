import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/Home.css';
import Dashboard from '../assets/Dashboard.jpg';
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
        <Navbar/>
        <div className='home' style={{ backgroundImage: `url(${Dashboard})`}}> 
            <div className='headerContainer'>
                <h1>Maturedi</h1>
                <p>Website Informatif tentang Perpajakan, Asuransi, dan Ilmu Penting Lainnya</p>
                <Link to="/menu">
                    <button>CARI SEKARANG!</button>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Home