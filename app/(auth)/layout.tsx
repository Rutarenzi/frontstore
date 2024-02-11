import Link from "next/link"


const Layout=({ children }: { children: React.ReactNode })=> {
  return(
   <>
    <div className="bg-white text-white p-4 flex justify-between items-center">
       <div className="flex items-center">
         <Link href={"/"}>
         <span className="font-bold text-lg text-black">Book Store</span>
         </Link>
       </div>
      
       <Link className="bg-[#828509] px-4 py-2 rounded hover:bg-[#828509] focus:outline-none" href={"/login"}>
         User
       </Link>
     </div>
     
     {children}
     
     
   </>
  )
}

export default Layout