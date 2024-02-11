import OrderCard from "@/app/_component/OrderCard"
import ProtectedRouter from "@/app/_component/Protect"



const Order=()=>{
  return(
    <ProtectedRouter>
    <div className="flex items-center justify-center mt-10">
     <div className="w-4/5 h-auto rounded-md">
       <h2 className="font-bold text-lg text-black m-10">Book</h2>
       <OrderCard />
       <OrderCard />
       <OrderCard />
       <OrderCard />
       <OrderCard />
       <OrderCard />
       
       
     </div>
    </div>
    </ProtectedRouter>
  )
}

export default Order