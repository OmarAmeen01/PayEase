import { Credentail_option } from "../../../../lib/auth"
import NextAuth from "next-auth/next"

const handler = NextAuth(Credentail_option)

export {handler as POST ,handler as GET }