import React from 'react';
import '../style/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
      <div className="Medsos">Media Social Kami</div>
        <div className='socialMedia'>
        {/* <div className="Medsos">Media Social Kami</div> */}
        <InstagramIcon/>
        <FacebookIcon/>
        <LinkedInIcon/>
        </div>
        <div className="copyright"> &copy; 2022 maturedi.com </div>
    </div>
  )
}

export default Footer