import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Law from '../assets/Law.jpg';
import '../style/About.css';

function About() {
  return (
    <div>
        <Navbar/>
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${Law})`}}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>Kami memiliki ide berupa laman interaktif yaitu: Maturedi:
                    Pusat Edukasi Digital Terkait Pengurusan Ragam Legal Dokumen berbasis Website.
                    Diharapkannya dari terbentuknya laman ini, masyarakat menjadi siap dalam menghadapi 
                    kewajiban pajak dan mampu mendapatkan informasi terpusat terkait pajak, asuransi,
                    dan pengurusan dokumen-dokumen penting.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About