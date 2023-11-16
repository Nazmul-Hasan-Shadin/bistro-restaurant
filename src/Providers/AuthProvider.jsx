import { createContext, useContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from "../firebase/firebase.config";
 export const AuthContext= createContext(null);
 const auth= getAuth(app)
const AuthProvider = ({children}) => {

    const googleProvider= new GoogleAuthProvider();


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

 const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
 }

const logOut=()=>{
    setLoading(true)
   return signOut(auth)
}

 const handleUpdateProfile=(name,photo)=>{
  return updateProfile(auth.currentUser,{
        displayName: name, photoURL:photo
     })
 }

//   observer
   useEffect(()=>{
    const unsuscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log(user);
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
      logOut,
      handleUpdateProfile,
      googleSignIn
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