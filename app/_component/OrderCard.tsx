import Image from "next/image"


const OrderCard=()=>{
 return(
    <div className="bg-white w-full p-3 rounded mt-3">
       <div className="flex flex-row justify-between items-center">
       <Image
        src="/bookPic.jpg"
        width={50}
        height={20}
        alt="Screenshots of the dashboard project showing desktop version"
      />
           <p>Heroes</p>
           <p> 2</p>
           <p>pending</p>
           <p>Cancel</p>
       </div>
    </div>
 )
}

export default OrderCard