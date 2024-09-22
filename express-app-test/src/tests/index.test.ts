import {expect,describe,test,it}  from "@jest/globals"
import request from "supertest"
//supertest is used for the http req
import { app } from "../indec"


describe('POST /sum', () => {
   it("should return sum of the two numbers",async()=>{
    const res=await request(app).post("/sum").send({
        a:1,
        b:2,
    })
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
   });
  
    it("should return sum of the two negative numbers",async()=>{
    const res=await request(app).post("/sum").send({
        a:-1,
        b:-2,
    })
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-3);
   });
    

})
