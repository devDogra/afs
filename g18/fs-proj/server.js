// const express = require('express'); 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import express from 'express'; 

import userRouter from "./routers/userRouter.js"

const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded()); 
app.use('/users', userRouter); 




app.listen(3000, () => console.log("http://localhost:3000")); 