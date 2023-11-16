import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';


const Login = () => {
const captchaRef= useRef(null)
const [disabled,setDisabled]= useState(true)
const {handleSignIn}= useContext(AuthContext)
const navigate= useNavigate();
const location= useLocation();
const from = location.state?.from?.pathname || "/"
     useEffect(()=>{
    
            loadCaptchaEnginge(6); 
         
     },[])
    const handleLogin= (event)=>{
        event.preventDefault()
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
         handleSignIn(email,password)
         .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: "User logged In successful",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              })

            navigate(from,{replace:true})  

         })
         .catch(error=>{
            console.log(error);
         })
    }

 const handleValidateCaptcha=(e)=>{
    
      const userCaptchaValue= e.target.value;
      if (validateCaptcha(userCaptchaValue)) {
        setDisabled(false)
      }
      else{
           setDisabled(true)
      }
    }


    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        {/* captcha */}

        <div className="form-control">
          <label className="label">
         <LoadCanvasTemplate></LoadCanvasTemplate>
          </label>
          <input onBlur={handleValidateCaptcha} ref={captchaRef}  type="text" name="captcha" placeholder="type th above captcha" className="input input-bordered" required />
          <button  className='btn btn-primary btn-xs mt-2'>Validate</button>
      
        </div>


        <div className="form-control mt-6">
         <input disabled={disabled} type="submit"value={'Login'} className="btn btn-primary" />
        </div>
      </form>

      <p className='px-6'> <small>New Here? <Link to={'/signup'}>Create an account</Link></small></p>
      <SocialLogin></SocialLogin>
    </div>
  
  </div>
</div>
    );
};

export default Login;