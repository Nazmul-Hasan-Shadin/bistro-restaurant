import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

// type Inputs = {
//   example: string,
//   exampleRequired: string
// }

const Signup = () => {
const navigate= useNavigate()
 const axiosPublic= useAxiosPublic() 
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
  
   const {createUser,handleUpdateProfile}= useContext(AuthContext)

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email,data.password)
        
        .then(res=>{
          const userInfo={
            name: data.name,
            email: data.email
          }
          // create user in the database
          axiosPublic.post('/users',userInfo)
          .then(res=>{
            if (res.data.insertedId) {
              reset()
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
          })
            const loggedUser= res.user;
            console.log(loggedUser)
            handleUpdateProfile(data.name,data.photoURL)
            .then(res=>{
                console.log('update successful');
            })
            .catch(err=>{
                console.log(err);
            })
        })
      }
    

    return (
      <>
      <Helmet>
        <title>  
      Bistro Boss || Sign Up

        </title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up now</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">Name is required</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='name' {...register("photoURL", { required: true })} placeholder="Name" className="input input-bordered"  />
          {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })}   name='email' placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' {...register("password", { required: true,minLength:6,
          pattern:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/

        
        
        }) }  type="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type==='required' && <span className="text-red-600">password is required</span>}

          {errors.password?.type==='minLength' && <span className="text-red-600">password Musht have 6 character</span>}
          {errors.password?.type==='pattern' && <span className="text-red-600">password Musht have one Special character,number and one uppercase must</span>}


          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
           <input type="submit" value={'sign Up'} className="btn btn-primary"  />
        </div>
      </form>

      <p className="px-6">
        <small> Already have an account ? <Link to={'/login'}>Login</Link> </small>

      </p>
    <SocialLogin></SocialLogin>

    </div>
  </div>
</div>
      
      
      </>
    );
};

export default Signup;