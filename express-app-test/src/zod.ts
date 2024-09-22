import express from "express"
import z from "zod"
export const app=express();
app.use(express.json());

const suminput=z.object({
    a:z.number(),
    b:z.number()
})


app.post("/sum",(req,res)=>{
   const parseResponse =suminput.safeParse(req.body);

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

app.get("/sum",(req,res)=>{
    const parseResponse=suminput.safeParse({
        a:Number(req.headers["a"]),
        b:Number(req.headers["b"])
    })

    if(!parseResponse.success){
        return res.status(411).json({
            message:"incorrect"
        })
    }
    
    const ans=parseResponse.data.a+parseResponse.data.b
    
    res.json({
        ans
    })

})