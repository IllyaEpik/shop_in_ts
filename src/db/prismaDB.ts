import { PrismaClient } from '../generated/prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql';

declare global {
  var prisma: PrismaClient | undefined;
}
const adapter = new PrismaLibSql({
  url: "file:./dev.db" 
})
const prisma = globalThis.prisma || new PrismaClient({
  adapter: adapter
})

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma;