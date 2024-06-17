import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const Header = () => {
  return (
    <header className="bg-charcoal text-ivory flex w-full border-b">
      <div className="flex wrapper items-center justify-between">
        <Link href="/" className="w-36">
          <h1 className={"text-3xl font-semibold"}>KoiKoi.io</h1>
        </Link>
        <div className="flex w-32 justify-end">

          <LoginButton>
            <Button className="bg-blue text-ivory">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
