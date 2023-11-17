import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export const axiosSecure=axios.create({
    baseURL:'http://localhost:5000',
   
})

const useAxios = () => {
    const navigate= useNavigate();
    const {logOut}= useAuth()
    // req iterceptor to add authrizaton header for every secure call to the api
 axiosSecure.interceptors.request.use(function(config){
    const token =localStorage.getItem('access-token')
    console.log('request stopped by interceptor',token);
    config.headers.authorization= `Bearer ${token}`

    return config;
 }, function(error){
    return Promise.reject(error);


 }
 )
//  intercepts 401 and 403 status

axiosSecure.interceptors.response.use(function(response){
    return response
} , function async(error){
 const status= error.response?.status
//  for 401ogout user
if (status ===401 || status===403) {
     logOut()
    navigate('/login')
}

 return Promise.reject(error);

})
   return axiosSecure
};

export default useAxios;