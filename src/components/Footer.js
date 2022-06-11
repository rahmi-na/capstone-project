import React from 'react';
import '../style/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoFooter from '../assets/logoFooter.png';

function Footer() {
  return (
    <div className='footer'>

      <div className='footer_left'>
        <img src={logoFooter}/>
        <p>Media Social Kami</p>
      </div>

      <div className='footer_right'>
            <InstagramIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
        <p> &copy; 2022 maturedi.com </p>
      </div>

    </div>
  )
}

export default Footer