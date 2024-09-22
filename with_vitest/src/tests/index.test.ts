/*import {describe, expect,test,it, vi} from "vitest"
import  request  from "supertest"
import { app } from "../index"
describe("POST /sum",()=>{
    it("should return the sum of two numbers",async()=>{
      const res=await request(app).post("/sum").send({
        a:1,
        b:2
      })
      expect(res.statusCode).toBe(200)
      expect(res.body.answer).toBe(3)
    })
    
      it("should return the 411 if no input provided",async()=>{
      const res=await request(app).post("/sum").send({})
      expect(res.statusCode).toBe(411)
    
    })
})

describe("GET /sum",()=>{
    it("should return  the sum of two numbers",async()=>{
        const res=await request(app).get("/sum").set({
            a:"1",
            b:"2"
        }).send({})
        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(3)
    })
    it("should return the 411 ",async()=>{
        const res=await request(app).get("/sum").send()   
       
        expect(res.statusCode).toBe(411);
    
    })
})
    */

import  request  from "supertest"
import { app } from "../index"
import { describe, expect, it ,vi} from "vitest"
import { Primsaclient } from "../_mocks_/db"

vi.mock('../db')

describe("POST /sum",()=>{
    it("should return the sum of two numbers",async()=>{
     Primsaclient.sum.create.mockResolvedValue({
      id:1,
      a:1,
      b:1,
      result:3
     })
      vi.spyOn(Primsaclient.sum,"create");

      const res=await request(app).post("/sum").send({
        a:1,
        b:2
      });

      expect(Primsaclient.sum.create).toHaveBeenCalledWith({
        data:{
          a:1,
          b:2,
       result:3
        }
      })

      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3)
    })
    
      it("should return the 411 if no input provided",async()=>{
      const res=await request(app).post("/sum").send({})
      expect(res.statusCode).toBe(411)
    
    })
})

describe("GET /sum",()=>{
    it("should return  the sum of two numbers",async()=>{
        const res=await request(app).get("/sum").set({
            a:"1",
            b:"2"
        }).send({})
        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(3)
    })
    it("should return the 411 ",async()=>{
         
         Primsaclient.sum.create.mockResolvedValue({
           id:1,
          a:1,
          b:1,
          result:3
         })

        const res=await request(app).get("/sum").send()   
       
        expect(res.statusCode).toBe(411);
    
    })
})