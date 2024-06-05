import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function LayoutPublic() {
  return (
    <>
        <div>
            <h1>Public</h1>
           
            <NavLink to='/login'> Login</NavLink>
        </div>
        <Outlet/>
    </>
  )
}
