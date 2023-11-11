import { useEffect, useState } from "react";

const useMenu=()=>{
    const [menue,setMenue]= useState([])
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
        fetch('menue.json')
        .then(res=>res.json())
        .then(data=> {
            
            setMenue(data)
            setLoading(false)

        } )
    },[])
    return [menue,loading]

}
export default useMenu;