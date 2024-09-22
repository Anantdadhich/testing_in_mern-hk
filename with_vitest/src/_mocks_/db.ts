import { PrismaClient } from "@prisma/client"

import { beforeEach } from "vitest";
import {mockDeep, mockReset}   from  "vitest-mock-extended"
//this means each mock starts with the fresh start
beforeEach(()=>{
    mockReset(Primsaclient)
})

export const Primsaclient=mockDeep<PrismaClient>()