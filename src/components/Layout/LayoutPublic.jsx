import React, { useState }  from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './layout_public.css';


export default function LayoutPublic() {
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
                ☰
            </div>
            <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
                <NavLink to='/home'>Inicio</NavLink>
                <NavLink to='/about'>Quiénes somos</NavLink>
                <NavLink to='/login'>Inicio de sesión</NavLink>
                <NavLink to='/register'>Registrarse</NavLink>
            </nav>
        </header>

    <Outlet/>
    
    <div className='footer-final'>
        © 2024 Proyecto
    </div>
    </>
  )
}
