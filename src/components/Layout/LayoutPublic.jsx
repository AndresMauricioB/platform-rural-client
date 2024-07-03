import React, { useState }  from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './layout_public.css';
import { useAuthFirebase } from '../../contexts/AuthFirebaseContext';


export default function LayoutPublic() {
  const { currentUser, logout } = useAuthFirebase();

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
     <header className="header">
            <div className="header__logo">
                {/* Puedes reemplazar esto con un logo real */}
                <h1>Logo d</h1>
            </div>
            
            <div className="header__menu-icon" onClick={toggleMenu}>
            {isOpen ? ( <p className="header__menu-icon">🗙</p>) : (<p className="header__menu-icon">☰</p>)}
            </div>
          
            <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
                <NavLink to='/home'>Inicio</NavLink>
                <NavLink to='/about'>Quiénes somos</NavLink>
                {currentUser ? (<><NavLink to='/dashboard'>Dashboard</NavLink> </>) : (<><NavLink to='/login'>Inicio de sesión</NavLink><NavLink to='/register'>Registrarse</NavLink></>)}  
            </nav>
        </header>

    <Outlet/>
    
    <div className='footer-final'>
        © 2024 Proyecto
    </div>
    </>
  )
}
