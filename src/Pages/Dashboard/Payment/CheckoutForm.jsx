import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
   const [error,setError]=useState(''); 
   const [clientSecret,setClientSecret]=useState('')
   const [transictionId,setTransictionId]=useState('')
    const stripe= useStripe();
    const elements= useElements();
   const axiosSecure=useAxios();
  const [cart,refetch]=useCart()
const {user}=useAuth()
  const totalPrice = cart.reduce((total,item)=>total+item.price,0)
 

    useEffect(()=>{
      if (totalPrice>0) {
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=> {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
      }
    },[axiosSecure,totalPrice])
//    hanlde submot
    const handleSubmit=async(event)=>{
           event.preventDefault()
           if (!stripe || !elements) {
             return
           }

         const card=elements.getElement(CardElement)


         if(card===null){
            return
         }

       const {error,paymentMethod}=await stripe.createPaymentMethod({
        type: 'card',
        card
       }) 

       if (error) {
        console.log('payment error',error);
        setError(error.message)
       }
       else{
        console.log('payment method',paymentMethod);
        setError('')
       }

// confirm payment
 
 const {paymentIntent,error:cofirmError}= await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
        card:card,
        billing_details:{
        email:user?.email || 'anonymous',
        name:user.displayName || 'anonymous'
        }
    }
 })

 if (cofirmError) {
    console.log(cofirmError);
 }
 else{
    console.log('payment itent',paymentIntent);
    if (paymentIntent.status==="succeeded") {
        console.log('transiction id',paymentIntent.id);
        setTransictionId(paymentIntent.id)
        // NOW SAVE PAYMENT INTO THE DATABASE

           const payment={
            email: user.email,
            transictionId:paymentIntent.id,
            price: totalPrice,
            date:new Date()  ,
            cartIds: cart.map(item=> item._id), 
            menuItemIds: cart.map(item=>item.menuId),
            status:'pending'

           }

   const res= await axiosSecure.post('/payments',payment)
   console.log(res.data);
   refetch()
   if (res.data?.paymentResult?.insertedId) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank You for give me money bro",
        showConfirmButton: false,
        timer: 1500
      });
   } 

    }
 }



    }

    return (
   <form onSubmit={handleSubmit}>
    <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

<button  className='btn btn-sm btn-primary' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>   

  <p className='text-red-600'> {error} </p>    
 {
    transictionId && <p className='text-green-600'>Your transiction id successful</p>
 }
   </form>
    );
};

export default CheckoutForm;