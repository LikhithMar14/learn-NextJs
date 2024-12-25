import { PrismaClient } from "@prisma/client";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

// Export the Prisma instance for use in your application
export { prisma };
