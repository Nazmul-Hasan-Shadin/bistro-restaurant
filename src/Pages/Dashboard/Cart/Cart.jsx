import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";



const Cart = () => {
    const [cart,refetch] = useCart();
    const axios= useAxios()
    console.log(cart,'cart');
    const totalPrice= cart.reduce((total,item)=>total + parseInt(item.price) ,0)
    
    const handleDelete=id=>{
     

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
           
            axios.delete(`/carts/${id}`)
            .then(res=>{
                if (res.data.deletedCount>0) {
                    refetch()
                         Swal.fire({

                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
            })
            
         

            }
          });
    }
    return (
        <div>
         <div className="flex justify-evenly mb-8">
         <h2 className="text-5xl">Items: {cart.length} </h2> 
         <h2 className="text-5xl">Total: {totalPrice} </h2> 
         <button className="btn btn-primary">Pay</button>
         </div>

         <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
    {
        cart.map((item,index)=>  <tr key={item._id}>
              <th>
               {index}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image}/>
                    </div>
                  </div>
     
                </div>
              </td>
              <td>
                {item.name}
              </td>
              <td> {item.price} </td>
              <th>
                <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs"> <FaTrashAlt></FaTrashAlt> </button>
              </th>
            </tr>)
    }


    </tbody>

    
    
  </table>
</div>       

        </div>
    );
};

export default Cart;