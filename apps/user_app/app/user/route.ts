
import { NextResponse } from "next/server"
import prisma from "@repo/db/client"; 

;

export const GET = async () => {
  const response=   await prisma.user.create({
        data: {
            email: "asd",
            age: "adsads"
        }
    })
    console.log(response)
    return NextResponse.json({
        message: "hi there"
    })
}