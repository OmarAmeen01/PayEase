import prismaClient, { PrismaClient } from "@prisma/client"

// this is called singleton bro
const prisma = new PrismaClient()

export default prisma