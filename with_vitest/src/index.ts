import express from "express"
import {z} from "zod"
import { Prismaclient } from "./db";

export const app=express();
app.use(express.json())

const inputttile=z.object({
    a:z.number(),
    b:z.number()
})

app.post("/sum",async(req,res)=>{
    const parseResponse=inputttile.safeParse(req.body)

      if(!parseResponse.success){
    return res.status(411).json({
        message:"incorrect inputs"
    })
   };

   const answer=parseResponse.data.a + parseResponse.data.b;
    
  const response= await Prismaclient.sum.create({
    data:{
       a:parseResponse.data.a,
       b:parseResponse.data.b,
       result:answer 
    }
   })

   res.json({
     answer,
     id:response.id
   })
   
});


app.get("/sum",(req,res)=>{
    const parseResponse=inputttile.safeParse({
        a:Number(req.headers['a']),
        b:Number(req.headers['b'])
    })

      if(!parseResponse.success){
    return res.status(411).json({
        message:"incorrect inputs"
    })
   }

   const answer=parseResponse.data.a + parseResponse.data.b;

   res.json({
    answer
   })
   
})