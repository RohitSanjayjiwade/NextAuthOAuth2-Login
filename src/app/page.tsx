"use client";
import { signIn, signOut, useSession } from "next-auth/react";


export default function Home() {

  const {data: session} = useSession();

  if(session)
  {
    return(
      <div className="flex h-screen items-center justify-center">

      <div className="bg-white rounded shadow-md">

        <img className="w-full h-[250px] rounded object-cover" src={session.user?.image} alt="" />
        <div className="border-red-600 p-4">
        <p className="text-xl font-semibold mb-2">Welcome {session.user?.name}. Signed In As</p>
        <p>{session.user?.email}</p>

        <button onClick={() => signOut()} className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
        </div>
      </div>
        
      </div>
      );
  }
  return (
    <div className="flex h-screen items-center justify-center">

      <div className="bg-white p-8 rounded-lg shadow-md">

        <p className="text-xl font-semibold mb-4">Not Signed In</p>

        <button onClick={() => signIn('github')} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Sign In With Github</button>
        <button onClick={() => signIn('google')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-2">Sign In With Google</button>

      </div>
      
    </div>
  );
}
