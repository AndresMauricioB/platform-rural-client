import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './layout_public.css'


export default function LayoutPrivate() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <>
     <header className="header">
            <div className="header__logo">
                {/* Puedes reemplazar esto con un logo real */}
                <h1>Logo</h1>
            </div>
            
            <div className="header__menu-icon" onClick={toggleMenu}>
              {isOpen ? ( <p className="header__menu-icon">🗙</p>) : (<p className="header__menu-icon">☰</p>)}
            </div>
          
            <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
           
            <NavLink to='/home'> Home</NavLink>
            <NavLink to='/about'> About</NavLink>
            <NavLink to='/profile'> Profile</NavLink>
            </nav>
        </header>
        <h1>DashBoard</h1>
    <Outlet/>
    
    <div className='footer-final'>
        © 2024 Proyecto
    </div>
    </>
   
  )
}
