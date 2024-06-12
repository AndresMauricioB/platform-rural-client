import './form-user.css';
import React, { useState } from 'react'
import { useAuthFirebase } from '../../contexts/AuthFirebaseContext';

export default function Register() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const { signupWithEmail } = useAuthFirebase();

    const handleSignup = async (e) => {
        e.preventDefault();
    try {
      await signupWithEmail(email, pwd);
    } catch (error) {
      console.error('Error signing up with email', error);
    }
  };

  return (
    <div className='container-form-user'>
        <form onSubmit={handleSignup} className='form-user'> 
            <input type="email" placeholder='Email' id='email' alue={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' id='password' value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <button>Reguitrese</button>
        </form>
    </div>
  )
}
