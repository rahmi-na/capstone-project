import React from 'react'

// Props untuk memanggil setiap item yang berada pada MenuList.js
function MenuItem({image, name}) {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})`}}> </div>
        <h1> {name} </h1>
        <p></p>
    </div>
  )
}

export default MenuItem