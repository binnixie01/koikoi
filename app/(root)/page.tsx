import Image from "next/image";
import React from "react";
import hero from "@/public/hero.png";
import { place } from "@/components/place";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Page = () => {
  const words = ["MANIPUR", "KANLEIPAK", "SANNA-LEIPAK"];
  return (
    <div className="bg-black">
      <div className="flex ">
        <div className="items-center flex justify-center w-2/5">
          <Image
            src={hero}
            alt="hero picture"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="h-[40rem] flex  ">
          <div className="relative text-4xl mx-auto top-1/4 left-12 font-normal text-neutral-600 dark:text-neutral-400">
            Your Gateway to <FlipWords words={words} />
            'S <br />
            Wonders
            <p className="text-md text-xl pt-2">
              Seamless ticketing for an extraordinary experience in Manipur’s
              iconic sites
            </p>
            <Button>
              <Link href="/explore">Explore</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
