"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignupPage(){
    const router=useRouter()
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        username:""
    })
    const [buttonDisabled,setBttonDisabled]=React.useState(false)
    const [loading,setLoading]=React.useState(false)
    //the signup talks with database so async
    const onSignup=async()=>{
        try {
            setLoading(true)
            const response=await axios.post("/api/users/signup",user)
            console.log("SignUp success",response.data)
            router.push("/login")
        } catch (error:any) {
            console.log("Signup failed",error.message)
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
       if(user.email.length>0 && user.password.length>0 && user.username.length>0){
        setBttonDisabled(false)
       }else{
        setBttonDisabled(true)
       }
    },[user])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2>{loading?"Processing":"Signup"}</h2>
            <hr />
            <label htmlFor="username">username</label>
            <input className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="username" />

            <label htmlFor="email">email</label>
            <input className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" id="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" />

            <label htmlFor="password">password</label>
            <input className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" id="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password" />
            <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onSignup}>
                {buttonDisabled ? "No SignUp":"SignUp here"}
            </button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}