import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function LayoutPrivate() {
  return (
    <>
        <div>
            <h1>DashBoard</h1>
            <NavLink to='/home'> Home</NavLink>
            <NavLink to='/about'> About</NavLink>
        </div>
        <Outlet/>
    </>
  )
}
