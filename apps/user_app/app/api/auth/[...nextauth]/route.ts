import NextAuth from "next-auth/next";
import { Credentail_option
} from "../../../../lib/auth"

const handler = NextAuth(Credentail_option)

export { handler as GET, handler as POST }