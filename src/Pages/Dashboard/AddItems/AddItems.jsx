import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import {FaUtensils} from "react-icons/fa"
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        
        <div>
         <SectionTitle headding="add an item" subHeading="whats new?" ></SectionTitle>

         <div>
         <form onSubmit={handleSubmit(onSubmit)}>
    
      <div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Reciepe*</span>
    
  </label>

  <input {...register('name',{required:true})} required type="text" placeholder="Type here" className="input input-bordered w-full " />

</div>

 <div className='flex gap-5'>
    {/* category */}
    <div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Category*</span>
    
  </label>

  <select {...register("category",{required:true})} className="select select-bordered w-full ">
  <option disabled selected>Select a category?</option>
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

  <input {...register('price',{required:true})} type="text" placeholder="price" className="input input-bordered w-full " />

</div>


 </div>

 <div className="form-control">
  <label className="label">
    <span className="label-text">Your bio</span>

  </label>
  <textarea  {...register('recipe',{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

</div>

<div className='form-control w-full my-6'>
<input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
</div>


     <button className='btn'>
Add Item <FaUtensils className='ml-4'></FaUtensils>
     </button>
      <input type="submit" />
    </form>
         </div>
        </div> 
    );
};

export default AddItems;