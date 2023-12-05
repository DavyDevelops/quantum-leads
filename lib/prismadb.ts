import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prismadb =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismadb;