import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const axios= useAxios()
  const {user}= useAuth();
  const { image, price, recipe, name ,_id} = item;
  const navigate= useNavigate()
  const location= useLocation()
 const [,refetch]=useCart()

 
  const handleAddToCart=food=>{
     if (user && user.email) {
      // <h3></h3>
      const cartItem={
     menuId:_id,
     email:user.email,
     name,
     price,
     image
      }

      axios.post('/carts',cartItem)
  .then(res=>{
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: ` ${name} Added To your Cart`,
        showConfirmButton: false,
        timer: 1500
      });
      // refetch cart to update the cart items count
      refetch()
    }
  })
  .catch(err=>{
    console.log(err);
  })
 
     }
     else{
      Swal.fire({
        title: "You are not logged in",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to the login
         navigate('/login' ,{state:{from:location}} )
        }
      });
     }

  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 absolute right-0 mr-4 mt-4"> ${price} </p>
      <div className="card-body flex justify-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={handleAddToCart } className="btn btn-primary bg-slate-100 border-0 border-b-4 border-orange-400 ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
