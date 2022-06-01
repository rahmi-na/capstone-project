import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import { Link } from "react-router-dom";
import '../style/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    // Variabel dimana akan berubah untuk re-render website dan akan menampilkan perubahan yang dibuat
    const [openLinks, setOpenLinks] = useState(false)

  return (
    <div className='navbar'>
        <div className='leftSide'>
            {/* Logo Di Sebelah Kiri Atas */}
            <img src={Logo} />
            {/* Link Responsive Ketika Website Seukuran Handphone */}
            <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            </div>
        </div>
        {/* Link Button */}
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
        <button>
            <ReorderIcon/>
        </button>
        </div>
    </div>
  )
}

export default Navbar