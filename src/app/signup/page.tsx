"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function SignupPage(){
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        username:""
    })
    const onSignup=async()=>{
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2>SignUp</h2>
            <hr />
            <label htmlFor="username">username</label>
            <input type="text" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="username" />

            <label htmlFor="email">email</label>
            <input type="text" id="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" />

            <label htmlFor="password">password</label>
            <input type="text" id="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password" />
            <button onClick={onSignup}>
                Sign Up here
            </button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}