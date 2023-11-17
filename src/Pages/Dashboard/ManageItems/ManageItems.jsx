import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenue';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const ManageItems = () => {
 const axiosSecure= useAxios()
 const [menu,,refetch]= useMenu()
 const handleDeleteItem=(item)=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {

     const res= await axiosSecure.delete(`/menu/${item._id}`)
   console.log(res.data);   
   
    if (res.data.deletedCount>0 ) {
        refetch()
        Swal.fire({
            title: "Deleted!",
            text: "Your Menu has been deleted.",
            icon: "success"
          });
    }
      
        }
      });

 }


    return (
        <div>
            <SectionTitle headding={'Manage All Items'} subHeading={'Hurry Up'}> </SectionTitle>

    <div>
    <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
    #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}


  {
    menu.map((item,index)=> <tr key={item._id}>
        <td>  {index +1} </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
            
              </div>
            </td>
            <td>
             
             {item.name}
            </td>
            <td className='text-right'> ${item.price} </td>
            <td>
              <button className="btn btn-md bg-orange-500 "> <FaEdit className='text-white text-2xl'></FaEdit> </button> 
            </td>
          <td>
          <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost btn-xs"> <FaTrashAlt></FaTrashAlt> </button>     
          </td>

          </tr>)
  }

    </tbody>
    {/* foot */}

    
  </table>
</div>
    </div>

        </div>
    );
};

export default ManageItems;