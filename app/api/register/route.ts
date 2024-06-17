import UserModel from "@/models/userModel";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { username, email, password } = await request.json();

  await dbConnect();
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 5);
 
  

  try {
    await UserModel.create({ username, email, password: hashedPassword });

    return new NextResponse("User is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
