import { createContext, useContext, useState } from "react";
import appFirebase from "../env";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth =getAuth(appFirebase);

const AuthFirebaseContext = createContext(undefined);

export const AuthFirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);

    onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log(user);
            setUser(user)
        }else{
            setUser(null)
        }
    })

    const values = {
        user,
    }

    return (
        <AuthFirebaseContext.Provider
            value={values}
        >
            {children}
        </AuthFirebaseContext.Provider>
    );
}

export const useAuthFirebase = () => useContext(AuthFirebaseContext);
