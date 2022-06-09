import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MenuList } from '../data/MenuList';
import MenuItem from '../components/MenuItem';
import '../style/Menu.css';

function Menu() {
  return (
    <div>
        <Navbar/>
            <div className='menu'>
                <h1 className='menuTitle'>Jelajahi Sekarang!</h1>
                <div className='menuList'>{MenuList.map((menuItem, key) => {
                    return <MenuItem image={menuItem.image} name={menuItem.name} quote={menuItem.quote} btn={menuItem.btn} key={key}/>
                })}</div>
            </div>
        <Footer/>
    </div>
  )
}

export default Menu;