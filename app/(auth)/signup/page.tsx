import Link from "next/link"


const SignUp=()=> {
   return(
    <div className="flex items-center justify-center h-screen">
    <div className="w-2/5 bg-white h-auto rounded-md">
       <h2 className="font-bold text-lg text-black m-10 text-center">Register</h2>
        <form className="flex items-center justify-center flex-col ">
        <div className="mb-4 w-2/3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4 w-2/3">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <button type="submit" className="w-2/3 bg-[#828509] text-white p-2 rounded-md">
        Register
      </button>
      <p className="mt-2 mb-8">
        Do not have account?{' '}
        <Link href="/login" className="underline">
           Login
        </Link>
      </p>
        </form>
     </div> 
     </div>
   )
}

export default SignUp