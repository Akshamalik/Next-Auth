"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function LoginPage(){
    const router =useRouter()
    const [user,setUser]=React.useState({
        email:"",
        password:"",
    })
    const onLogin=async()=>{
        try {
            setLoading(true)
            const response=await axios.post("/api/users/login",user)
            console.log("login success",response.data)
            toast.success("login success")
            router.push("/profile")
        } catch (error:any) {
            console.log("Login failed",error.message)
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    const [buttonDisabled,setBttonDisabled]=React.useState(false)
    const [loading,setLoading]=React.useState(false)
    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setBttonDisabled(false)
        }else{
            setBttonDisabled(true)
        }
    },[user])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2>{loading?"processing":"Login"}</h2>
            <hr />
            <label htmlFor="email">email</label>
            <input className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" id="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" />

            <label htmlFor="password">password</label>
            <input className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" id="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password" />
            <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>
                Login here
            </button>
            <Link href="/signup">Visit SignUp Page</Link>
        </div>
    )
}