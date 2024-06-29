"use client"
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import logo from "@/public/logo1.svg";
import {useSession} from "next-auth/react"
import { signOut } from "next-auth/react";

const Header = () => {
  const {status,data}=useSession()
  return (
    <header className="flex w-full border-b h-12 bg-black pt-2">
      <div className="flex wrapper items-center justify-between">
        <Link href="/" className="w-36 bg-white rounded-3xl">
          <div className="flex items-center">
            <Image src={logo} alt="logo image" width={80} className="rounded-3xl" />
            <div className="relative right-4">KoiKoi</div>
          </div>
        </Link>

        <div className="flex w-72 justify-end gap-4 shadow-xl">
          {status==="authenticated"?(
            <>
            <div className="text-white/90">{data?.user?.name}</div>
            <Button onClick={()=>{signOut()}}>Sign out</Button></>
          ):(
            <Button asChild><Link href={"/register"}>Sign in</Link></Button>
          )}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
