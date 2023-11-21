import React, {useState} from "react"

import '../styles/MenuIcon.css'

const MenuIcon = isOpen => {
  return (
    <div className='menu-icon'>
      <div className='menu-line'></div>
      <div className='menu-line'></div>
      <div className='menu-line'></div>
    </div>
  )
}

export default MenuIcon
