import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from '../pages/Error'
import LayoutPrivate from '../components/Layout/LayoutPrivate'
import Dashboard from '../pages/dashboard/Dashboard'

export default function RoutersPrivate() {
    return (
        <Routes>
            <Route path="/" element={<LayoutPrivate />}>
                <Route path='*' element={<Error/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
            </Route>

        </Routes>
    )
}
