import { createContext, useContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
 export const AuthContext= createContext(null);
 const auth= getAuth(app)
const AuthProvider = ({children}) => {
 const axiosPublic= useAxiosPublic()
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
        if (currentUser) {
      const userInfo= {email: currentUser.email}
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
            if (res.data.token) {
                localStorage.setItem('access-token',res.data.token)
            }
        })
        }
        else{
            // remove token from client site
            localStorage.removeItem('access-token')
        }
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