import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import LayoutPrivate from '../components/Layout/LayoutPrivate'

export default function RoutersPrivate() {
    return (
        <Routes>
            <Route path="/" element={<LayoutPrivate />}>
               
                <Route path='*' element={<Error/>} />
            </Route>

        </Routes>
    )
}
