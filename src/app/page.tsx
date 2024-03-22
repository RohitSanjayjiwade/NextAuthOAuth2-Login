"use client";
import { signIn, useSession } from "next-auth/react";


export default function Home() {

  const {data: session} = useSession;

  if(session)
  {
    return(
      <div>
        <h1>Your Profile</h1>
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
