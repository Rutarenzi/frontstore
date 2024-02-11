"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";



const ProtectedRouter=({children}:{children: React.ReactNode})=>{
    const router = useRouter();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        console.log(token)
        if(!token){
            router.push('/login');
        }
    },[])
    return(
     <>{children}</>
    )

}

export default  ProtectedRouter