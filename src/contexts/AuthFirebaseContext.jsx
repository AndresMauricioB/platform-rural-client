import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from "../env";

const AuthFirebaseContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user);
        setLoading(false);
      });
  
      return unsubscribe;
    }, []);
  
    const loginWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signupWithEmail = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
      };
  
    const logout = () => {
      return signOut(auth);
    };
  
    const value = {
      currentUser,
      loginWithEmail,
      signupWithEmail,
      logout,
      loginWithGoogle
    };
    return (
      <AuthFirebaseContext.Provider value={value}>
        {!loading && children}
      </AuthFirebaseContext.Provider>
    );
}

export const useAuthFirebase = () => useContext(AuthFirebaseContext);



