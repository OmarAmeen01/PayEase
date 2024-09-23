
import  CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt"
import GoogleProvider from "next-auth/providers/google"
type obj = {[key:string]:string}
export const  Credentail_option= {
    providers:[
        CredentialsProvider({
            name:"Phone",
            credentials:{
                phone:{label:"Phone",type:"number", placeholder:"Enter your phone number"},
                password:{label:"Password",type:"password", placeholder:"Enter your password"}
        
        },
            async authorize (credentials){
               if(typeof credentials!=="undefined"){
                const number = credentials.phone
                const password = credentials.password
      
                 const saltRounds= 10
            const hash =   bcrypt.hashSync (password,saltRounds,)
  
            try {
              const user =await prisma.user.findFirst({
                where:{number:number}
              })
             
              if(user){
                   
                const isUser= bcrypt.compareSync(password,user.password)

                if(isUser){
                      return {id:user?.id,
                         email:user?.email,
                         number:user?.name
                      }
                }else{
                  return null
                }

              }

            const newUser = await prisma.user.create({
              data:{number:number,
                password:hash,
                auth_type:"Credetials"
              }
              
            })

            if(newUser){
             return {
              id:newUser?.id,
              email:newUser?.email,
              name:newUser?.name
             }
            }else{
              return null
            }
            } catch (error) {
              console.log(error)
              return null
            }
          }else{
            return null
          }
            },
            
        }),

        GoogleProvider({

          clientId:process.env.GOOGLE_CLIENT_ID as string,
          clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
        })
        
    ],
    secret:process.env.JWT_SECRET,
 
    callbacks:{
      
    session({session,token,user}:any) {
  
  if(typeof session.user !=="undefined"){
    session.user.id =token.sub
    return session
  }
     
    },
    }
}
