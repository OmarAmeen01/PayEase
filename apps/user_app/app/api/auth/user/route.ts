import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../../lib/auth";

async function GET(){
    const session = await getServerSession(authOptions)
    if(session){
     return   NextResponse.json({
          user:session.user
    })
}

return NextResponse.json({
    msg:"Your are not authorised"
},{
    status:403
})
}