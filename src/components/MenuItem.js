import React from 'react'

// Props untuk memanggil setiap item yang berada pada MenuList.js
function MenuItem({image, name, quote, btn}) {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})`}}> </div>
        <center>
          <h1> {name} </h1>
          <p> {quote} </p>
          <button> {btn} </button>
        </center>
    </div>
  )
}

export default MenuItem