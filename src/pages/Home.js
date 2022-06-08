import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/Home.css';
import WomenJurnal from '../assets/WomenJurnal.jpg';
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
        <Navbar/>
        <div className='home'>
          <img src={WomenJurnal}/>
            <div className='headerContainer'>
                <h2>Halo Sahabat! Yuk</h2>
                <h1>Makin Ready</h1>
                <h1>Bareng Maturedi!</h1>
                <p>paham masalah perpajakan, asuransi,<br/> sampai mengurusi legal dokumen ga pake<br/> ribet di maturedi.</p>
                <Link to="/menu">
                    <button>Belajar Sekarang!</button>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Home