// const express = require('express'); 
import express from 'express'; 
import { PrismaClient } from '@prisma/client' 
const prisma = new PrismaClient(); 


async function main() {
    await prisma.user.create({
        data: {
            email: "rinku@gmail.com",
            name: "Prachi",
        }
    })
}
main(); 




