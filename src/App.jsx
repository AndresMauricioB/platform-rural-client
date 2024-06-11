import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import RoutersPrivate from './routes/RoutersPrivate'
import ProtectedRoutes from './routes/ProtectedRoutes'
import LayoutPublic from './components/Layout/LayoutPublic'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<ProtectedRoutes><RoutersPrivate/></ProtectedRoutes >} />
                    <Route path="/" element={<LayoutPublic />}>
                        
                        <Route path='/about' element={<About/>} />
                        <Route path='/login' element={<Login/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default App
