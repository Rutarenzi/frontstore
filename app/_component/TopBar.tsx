import Link from "next/link";

const TopBar = () => {
   return (
     <div className="bg-white text-white p-4 flex justify-between items-center">
       <div className="flex items-center">
         <Link href={"/"}>
         <span className="font-bold text-lg text-black">Book Store</span>
         </Link>
       </div>
       <div className="flex-grow mx-4">
         <input
           type="text"
           placeholder="Search..."
           className="w-full p-2 rounded border border-#EAE3E3 text-white focus:outline-none"
         />
       </div>
       <Link className="bg-[#828509] px-4 py-2 rounded hover:bg-[#828509] focus:outline-none" href={"/login"}>
         User
       </Link>
     </div>
   );
 };
 
 export default TopBar;
 
