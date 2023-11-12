import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { app } from "../firebase/firebase.config";
 export const AuthContext= createContext(null);
 const auth= getAuth(app)
const AuthProvider = ({children}) => {

 const [user,setUser]= useState(null);

  const [loading,setLoading]= useState(true);

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

 const handleSignIn= (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }


const logOut=()=>{
    setLoading(true)
   return signOut(auth)
}


//   observer
   useEffect(()=>{
    const unsuscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)

    })
    return ()=>{
        unsuscribe()
    }
   },[])



    const authInfo={
      user,
      loading,
      createUser,
      handleSignIn,
      logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;