import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import LayoutPrivate from '../components/LayoutPrivate'

export default function RoutersPrivate() {
    return (
        <Routes>
            <Route path="/" element={<LayoutPrivate />}>
                <Route path='/home' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='*' element={<Error/>} />
            </Route>

        </Routes>
    )
}
