import Image from "next/image";
import kangla from "@/public/places/kangla.jpg";
import khongjom from "@/public/places/khongjom.jpg";
import marjing from "@/public/places/marjing.jpg";
import mi from "@/public/places/mayangimphal.jpeg";
import hiyang from "@/public/places/hiyang.jpg"

export const Monument = ({url}) => (
    // <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
      <Image src={url} alt="photo Monument" />
    // </div>
  );

const place=[{
        title:"Kangla Fort",
        photoUrl:kangla,
        address:" RW4V+X4M, Kangla, Imphal, Manipur 795001",
        description:"",
        link:""
    },
    {
        title:"Khongjom War Memorial Complex",
        photoUrl:khongjom,
        address:"Lamding Mamang Leikai, Thoubal, Manipur 795148",
        description:"",link:""
    },
    {
        title:"Marjing Polo Statue",
        photoUrl:marjing,
        address:"VXH3+QJ, Heingang, Manipur 795002",
        description:"",link:""
    },
    {
        title:"Hiyangthang Lairembi Temple",
        photoUrl:hiyang,
        address:"PWG3+J73, Hiyangthang Mayai Leikai, Hiyangthang, Manipur 795009",
        description:"",link:""
    },
    {
        title:"Mayang Imphal Bungalow",
        photoUrl:mi,
        address:"",
        description:"",link:""
    }
    
]
export {place};