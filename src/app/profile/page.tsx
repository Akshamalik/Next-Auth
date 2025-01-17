"use client"
import axios from "axios";
import Link from "next/link";
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function ProfilePage() {
    const router=useRouter()
    const [data,setData]=useState("nothing")
    const logout=async()=>{
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout Successfully")
            router.push('/login')
        } catch (error:any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    const getUserDetail=async()=>{
      const res=await axios.get("/api/users/me")
      console.log(res.data)
      setData(res.data.data._id)
    }
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2>{data==="nothing"? "Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr />
      <button
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
" onClick={logout}
      >
        Log Out
      </button>
      <button
        className="bg-red-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
" onClick={getUserDetail}
      >
        Get user Detail
      </button>
    </div>
  );
}
