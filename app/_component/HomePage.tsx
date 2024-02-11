import BookCard from "./Card"
import TagButton from "./Tag.Button";

const getBook=async()=> {
    const Book = await fetch("http://localhost:4545/api/v1/Book",{ cache: 'no-store' });
    
    const data = await Book.json()
    return data.data
}

const HomePage=async()=>{
   const Book = await getBook();
 return(
    <div className="flex justify-center  mt-10  ">
     <div className="w-4/5 bg-white h-auto rounded-md">
       <h2 className="font-bold text-lg text-black m-10">Book</h2>
        <ul className="flex gap-0 space-x-4 ml-10 border border-#EAE3E w-4/5 ">
           <TagButton />
           <TagButton />
           <TagButton />
        </ul>
        <div className="w-4/5 m-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {Book.map((item: any)=>(
            <BookCard 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            writer={item.writer} 
            image={item.image} 
            tags={item.tags} 
            price={item.price}/>
           )
             
           )}        
        </div>
     </div>
    </div>
 )
}


export default HomePage