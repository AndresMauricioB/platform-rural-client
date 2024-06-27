import './form-user.css';
import React, { useState } from 'react'
import { useAuthFirebase } from '../../contexts/AuthFirebaseContext';
import { useNavigate } from 'react-router-dom';

export default function login() {

    const [email, setEmail] = useState("");
	  const [pwd, setPwd] = useState("");
    const { loginWithEmail, loginWithGoogle } = useAuthFirebase();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await loginWithEmail(email, pwd);
          navigate('/home');
        } catch (error) {
         // console.error('Error logging in with email', error);
          setError("Error logging in with email");

        }
      };

      const handleGoogleLogin = async () => {
        try {
          await loginWithGoogle();
        } catch (error) {
         // console.error('Error logging in with Google', error);
          setError("Error logging in with Google");
        }
      }; 
      

  return (
    <div className='container-form-user'>
        <form onSubmit={handleLogin} className='form-user'> 
            <input type="email" placeholder='Email' id='email' alue={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' id='password' value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <button>Inicie Sesion</button>
        </form> 
        <button className='btn-google' onClick={handleGoogleLogin}>Iniciar sesión <i className="fa-brands fa-google"></i></button> 
        <p>{error}</p> 
        
    </div>
  )
}
