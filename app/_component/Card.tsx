import Image from "next/image";


interface BookCardProps{
    id: number;
    title: string;
    writer: string;
    image : string;
    tags: string;
    price: number   
}


const BookCard:React.FC<BookCardProps>=({
    id,
    title,
    writer,
    image,
    tags,
    price
})=>{
   return(
     <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
        <Image
        src={image}
        width={1000}
        height={760}
        className="w-full h-48 object-contain"
        alt="Book image"
      />
      <div className="p-4">
       <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
       <p className="text-gray-600 mb-4 text-center">{writer}</p>
       <div className="flex space-x-1 mb-2">
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{tags}</span>

       </div>
       <div className="flex justify-end space-x-1 mb-2">
          <p className="font-semibold">$ {price}</p>
       </div>
       <button className="bg-[#828509] text-white px-4 py-1 rounded w-full">
        Buy
       </button>
      </div>
     </div>
   )
}

export default BookCard