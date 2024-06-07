import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './layout_public.css';


export default function LayoutPublic() {
  return (
    <>
    <header className="header">
        <div className="header__logo">
            {/* Puedes reemplazar esto con un logo real */}
        </div>
        <nav className="header_nav">
            <NavLink to='/home'> Inicio</NavLink>
            <NavLink to='/about'> Quiénes somos</NavLink>
            <NavLink to='/login'> Inicio de sesión</NavLink>
            <NavLink to='/login'> Registrarse</NavLink> 
        </nav>
    </header>

    <div>
        <h1>Public</h1>
    </div>

    <Outlet/>
    
    <div className='footer-final'>
        © 2024 Rural
    </div>
    </>
  )
}
