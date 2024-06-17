import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthFirebase } from '../contexts/AuthFirebaseContext';


export default function ProtectedRoutes({children}) {
    const { currentUser } = useAuthFirebase();

    if(currentUser){
        return children;
    }else{
        return <Navigate to='/login'/>
    }
}
