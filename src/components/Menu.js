import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function () {
  return (
    <div>
        <Navbar/>
            <div className='menu'>
                <h1 className='menuTitle'>Materi</h1>
                <div className='menuList'></div>
            </div>
        <Footer/>
    </div>
  )
}

export default 