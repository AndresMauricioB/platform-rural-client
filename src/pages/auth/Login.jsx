import React, { useEffect, useState } from 'react'
import appFirebase from "../../env";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth =getAuth(appFirebase);

export default function () {

    const [regi,setRegi] = useState(false);
    const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");

    useEffect(() => {
        
        console.log(auth);
    }, []);

    const funtAuth = async(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password = e.target.password.value;
        if(regi){
            await createUserWithEmailAndPassword(auth,email,password);
        }else{
            try {
                await signInWithEmailAndPassword(auth,email,password);
            } catch (error) {
                alert('Email or Password Fail');
            }
        }
    }

   

  return (
    <div>
        <form onSubmit={funtAuth}> 
            <input type="email" placeholder='Email' id='email' />
            <input type="password" placeholder='Password' id='password' />
            <button>{regi ? "Reguitrese" : "Inicie Sesion"}</button>
        </form>
        <h4>{regi ? "Si ya tienes cuenta" : "No tienes cuenta"}<button onClick={()=>setRegi(!regi)}>{regi ? "Inicie Sesion" : "Reguitrese"}</button></h4>
    </div>
  )
}
