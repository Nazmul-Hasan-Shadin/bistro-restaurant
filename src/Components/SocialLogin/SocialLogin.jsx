import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const axiosPublic= useAxiosPublic()
    const navigate=useNavigate()
    const {googleSignIn}=useAuth();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(res=>{
         const userInfo={
            email: res?.user.email,
            name: res.user?.displayName
         }

         axiosPublic.post('/users',userInfo)
         .then(res=>{
            console.log(res.data);
           navigate('/')
         })

      


        })
    }
    return (
        <div className='px-8 '>
            <div className='divider'></div>
            <div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle className='mr-2'></FaGoogle>
 
  Google
</button>
            </div>
        </div>
    );
};

export default SocialLogin;