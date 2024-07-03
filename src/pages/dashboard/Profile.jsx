import React, { useEffect } from 'react'
import { useAuthFirebase } from '../../contexts/AuthFirebaseContext';

export default function Profile() {
    const { currentUser, logout } = useAuthFirebase();

  useEffect(() => {
    if(currentUser){
      //console.log(currentUser.accessToken);
    }  
  }, [])



  return (
    <>
    <div className='section1'>
        <div className='container1'>
          ¡Te damos la bienvenida a tu comunidad profesional!
        </div>
        <div className='container1'>
       
      {currentUser ? (
        <>
          <h1>Welcome: {currentUser.email}</h1>
          <button onClick={logout}>Logout</button>
        </>) : (<h1>Please login</h1>)}
        </div>
        <div className='container1'>
            Hola
        </div>

    </div>
    
    </>

  )
}
