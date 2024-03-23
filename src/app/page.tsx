"use client";
import { signIn, signOut, useSession } from "next-auth/react";


export default function Home() {

  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex h-screen items-center justify-center">

        <div className="bg-white rounded shadow-md">

          <img className="w-full h-[250px] rounded object-cover" src={session.user?.image} alt="" />
          <div className="border-red-600 text-black p-4">
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

        <p className="text-xl text-black font-semibold mb-4">Not Signed In</p>
        <div className="flex">

          <div className="flex gap-3 items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            <button onClick={() => signIn('github')} >Sign In With Github</button>
          </div>

          <div className="flex gap-3 items-center bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <button onClick={() => signIn('google')}>Sign In With Google</button>
          </div>

        </div>
      </div>
      
    </div>
  );
}
