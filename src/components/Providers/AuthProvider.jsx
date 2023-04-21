import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
 


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        signOut(auth)
    }
    
 
    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOut
    }

    // Observer user Auth State
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser)
            setLoading(false);
            
        })
        // Stop obserbing while it's unmounting
        return () => {
            return unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;