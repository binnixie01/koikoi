"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import  { place,Monument } from "@/components/place";

import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";


// const Page = () => {
  // return (
  //   <BentoGrid className="max-w-4xl mx-auto">
  //     {place.map((item, i) => (
       
  //           <BentoGridItem
  //             key={i}
  //             title={item.name}
  //             description={item.description}
  //             header={<Monument url={item.photoUrl} />}
  //             className={i === 3 || i === 6 ? "md:col-span-2" : ""}
  //           />
          
  //     ))}
  //   </BentoGrid>
  // );

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: {
//     name: string;
//     photoUrl: StaticImageData,
//     address:string,
//     description: string
//   }[],
//   className?: string;
// }) => {
//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//    <BentoGrid className="max-w-4xl mx-auto">
//         {items.map((item, i) => (
//         <Link
//           href={""}
//           key={""}
//           className="relative group  block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(i)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence>
//             {hoveredIndex === i && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,
//                   transition: { duration: 0.15 },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: { duration: 0.15, delay: 0.2 },
//                 }}
//               />
//             )}
//           </AnimatePresence>
//           <BentoGridItem
//               key={i}
//               title={item.name}
//               description={item.description}
//               header={<Monument url={item.photoUrl} />}
//               // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//               className={cn(
//                 "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//                 className
//               )}
//             />
//         </Link>
//       ))}</BentoGrid>
    
//   );
// };
// const Page = () => {
//   return (<div className="max-w-5xl mx-auto px-8 bg-black">
//     <BentoGrid className="max-w-4xl mx-auto">
//       {place.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={<Monument url={item.photoUrl}/>}
//           link={item.link}
//           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//         />
//       ))}
//     </BentoGrid></div>
//   );
// }

const Page = () => {
return (<div className="max-w-5xl mx-auto px-8 bg-black">
<HoverEffect items={place}></HoverEffect>
</div>)
};


export default Page;
