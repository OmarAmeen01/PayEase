import { getServerSession } from "next-auth";
import { Credentail_option } from "../../../../lib/auth";
import { NextResponse } from "next/server";

async function GET(){
    const session = await getServerSession(Credentail_option)
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