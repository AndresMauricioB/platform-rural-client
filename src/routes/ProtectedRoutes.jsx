import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthFirebase } from '../contexts/AuthFirebaseContext';

export default function ProtectedRoutes({children}) {
    // const user=JSON.parse(localStorage.getItem('user')) || null
    const { user } = useAuthFirebase();
  
    if(user){
        return children;
    }else{
        return <Navigate to='/login'/>
    }
}
