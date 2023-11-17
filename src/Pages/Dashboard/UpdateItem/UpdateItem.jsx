import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxios from '../../../hooks/useAxios';



const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
 const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
    const {name,category,recipe,price,_id} = useLoaderData()
    const { register, handleSubmit,reset } = useForm()

    const axiosSecure= useAxios()
    const onSubmit = async(data) => {
        // upload image to imagebb
        const imageFile= {image:data.image[0]}
        const res= await useAxiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
      if (res.data.success) {
        //now send the menu item data to the server with the image 
        const menuItem= {
            name: data.name,
            price: parseFloat(data.price),
            recipe:data.recipe,
            image: res.data.data.display_url
        }
        // now post menu item to the server
     const menuRes= await axiosSecure.patch(`/menu/${_id}`,menuItem)
     console.log(menuRes.data);
      if (menuRes.data.modifiedCount>0) {
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is Updated to the menu`,
            showConfirmButton: false,
            timer: 1500
          });
      }
      }
        
    
    }
    return (
        <div>
            <SectionTitle headding={'update Item'} subHeading={'Update Info'}></SectionTitle>

            <div>
         <form onSubmit={handleSubmit(onSubmit)}>
    
      <div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Reciepe*</span>
    
  </label>

  <input defaultValue={name} {...register('name',{required:true})} required type="text" placeholder="Type here" className="input input-bordered w-full " />

</div>

 <div className='flex gap-5'>
    {/* category */}
    <div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Category*</span>
    
  </label>

  <select defaultValue={category} {...register("category",{required:true})} className="select select-bordered w-full ">
  <option disabled value='default' >Select a category?</option>
  <option value={'salad'}> Salad </option>
  <option value={'pizza'}>Pizza</option>
  <option value={'soup'}>Soup</option>
  <option value={'dessert'}>Dessert</option>
  <option value={'drinks'}>Drinks</option>
</select>

</div>

    {/* price */}

   
    <div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Price*</span>
    
  </label>

  <input defaultValue={price} {...register('price',{required:true})} type="text" placeholder="price" className="input input-bordered w-full " />

</div>


 </div>

 <div className="form-control">
  <label className="label">
    <span className="label-text">Your bio</span>

  </label>
  <textarea  defaultValue={recipe} {...register('recipe',{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

</div>

<div className='form-control w-full my-6'>
<input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
</div>


     <button className='btn'>
 Update Menu Item
     </button>
      <input type="submit" />
    </form>
         </div>


        </div>
    );
};

export default UpdateItem;