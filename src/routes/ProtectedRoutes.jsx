import React from 'react'
import { Navigate } from 'react-router-dom'


export default function ProtectedRoutes({children}) {

    const user=JSON.parse(localStorage.getItem('user')) || null
  
    if(user){
        return children;
    }else{
        return <Navigate to='/login'/>
    }

}
