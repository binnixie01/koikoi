"use client"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
// import { signIn } from "@/auth"


export const Social = ()=>{
    const handleSignIn = () => {
         signIn("google")
      };
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button variant="outline" size="lg" className="w-full" onClick={()=>handleSignIn()}><FcGoogle className="h-5 w-5"/></Button> 
            
        </div>
        
    )
}