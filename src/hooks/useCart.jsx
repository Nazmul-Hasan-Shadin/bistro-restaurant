import { useQuery } from "@tanstack/react-query";
import useAxios, { axiosSecure } from "./useAxios";
import useAuth from "./useAuth";


const useCart = () => {
    const axios= useAxios()
    const {user}= useAuth()
    const {data:cart=[],refetch}= useQuery({
        queryKey:['cart',user?.email],
        queryFn: async()=>{
            const res= await axios.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart,refetch]
};

export default useCart;