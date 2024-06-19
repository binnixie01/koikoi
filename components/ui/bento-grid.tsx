import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardDescription, CardTitle } from "./card";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,key,link
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  key: null|number ;
  link:string;
}) => {
  
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    // <div
    //   className={cn(
    //     "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
    //     className
    //   )}
    // >
    //   {header}
    //   <div className="group-hover/bento:translate-x-2 transition duration-200">
    //     {icon}
    //     <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
    //       {title}
    //     </div>
    //     <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
    //       {description}
    //     </div>
    //   </div>
    // </div>
    <Link
          href={link}
          // key={link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(key)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === key && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.div
        className="relative z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1, transition: { duration: 0.15, ease: "easeInOut" } }}
        exit={{ opacity: 1, transition: { duration: 0.15, ease: "easeInOut" } }}
      >
          <Card>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </Card></motion.div>
        </Link>
  );
};
