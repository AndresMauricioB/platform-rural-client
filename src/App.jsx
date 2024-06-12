import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import RoutersPrivate from './routes/RoutersPrivate'
import ProtectedRoutes from './routes/ProtectedRoutes'
import LayoutPublic from './components/Layout/LayoutPublic'
import About from './pages/About'
import Register from './pages/auth/Register'
import Home from './pages/Home'

function App() {
  
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<ProtectedRoutes><RoutersPrivate/></ProtectedRoutes >} />
                    <Route path="/" element={<LayoutPublic />}>
                        <Route path='/home' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default App
