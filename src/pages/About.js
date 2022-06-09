import React from 'react'
import '../style/About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Photo from '../assets/Photo.jpg';
import AboutUs from '../assets/AboutUs.jpg';
import Avatar from '@mui/material/Avatar';

function About() {
  return (
    <div>
      <Navbar/>
      <div className='title'> Tentang Kami </div>
        <div className='index'>

          <div className='RowTop'>
            <div className='benner'>
              <div className='photoProfil'>
                <Avatar alt="" src={Photo} sx={{ width: 76, height: 76 }}/>
                <p> Nama : <br/>Social Media : <br/>About Me : </p>
              </div>
            </div>

              <img className='background' src={AboutUs}/>

            <div className='benner'>
              <div className='photoProfil'>
                <Avatar alt="" src={Photo} sx={{ width: 76, height: 76 }}/>
                <p> Nama : <br/>Social Media : <br/>About Me : </p>
              </div>
            </div>
          </div>

          <div className='RowBottom'>
            <div className='benner'>
              <div className='photoProfil'>
                <Avatar alt="" src={Photo} sx={{ width: 76, height: 76 }}/>
                <p> Nama : <br/>Social Media : <br/>About Me : </p>
              </div>
            </div>

            <div className='benner'>
              <div className='photoProfil'>
                <Avatar alt="" src={Photo} sx={{ width: 76, height: 76 }}/>
                <p> Nama : <br/>Social Media : <br/>About Me : </p>
              </div>
            </div>

            <div className='benner'>
              <div className='photoProfil'>
                <Avatar alt="" src={Photo} sx={{ width: 76, height: 76 }}/>
                <p> Nama : <br/>Social Media : <br/>About Me : </p>
              </div>
            </div>
          </div>

        </div>
      <Footer/>
    </div>
  )
}

export default About