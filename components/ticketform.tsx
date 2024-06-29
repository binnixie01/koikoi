import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


const TicketForm = () => {
    const [amount,setAmount]=useState<number>()
    const router = useRouter();
    const handleChange=(e:any)=>{
        setAmount(e.target.value)
    }
    const handleBooking=()=>{
        router.push("/orders")
    }
    const isDisabled = amount==0||amount==undefined;
  return (
    <div className="bg-slate-50 w-1/4 absolute top-1/2 left-1/3 p-4 flex flex-col gap-2">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="number">No. of Ticket</Label>
        <Input type="number" id="number" onChange={handleChange} placeholder="Enter no of tickets" defaultValue={0} />
      </div>
      <div>Total : {50*amount!}</div>
      <Button onClick={handleBooking} className="w-full" disabled={isDisabled}>Confirm</Button>
    </div>
  );
};

export default TicketForm;
