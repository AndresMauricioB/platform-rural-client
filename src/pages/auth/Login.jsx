import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function () {
    const navigate= useNavigate();
    console.log(navigate);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const user={
        email:'prueba@gmail.com',
        password:'12345678'
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(user.email===email && user.password===password){
            console.log('Entro');
            localStorage.setItem('user', JSON.stringify(user.email));
            navigate('/', {replace: true});
        }else{
            alert("correo o contraseña incorrectos");
        }
    };

   

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    </div>
  )
}
