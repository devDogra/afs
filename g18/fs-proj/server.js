const express = require('express'); 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import express from 'express'; 

async function main() {
    await prisma.user.create({
        data: {
            email: "devdogra1@gmail.com",
            name: "Dev",
        }
    })
}
main(); 

const app = express(); 


app.listen(3000, () => console.log("http://localhost:3000")); 