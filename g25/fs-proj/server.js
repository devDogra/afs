import express from 'express'; 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    await prisma.user.create({
        data: {
            name: "Sanya",
            email: "sanya@gmail.com",
        }
    })
}
main(); 
