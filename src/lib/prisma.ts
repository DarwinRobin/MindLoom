// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Create a global prisma var to prevent multiple instances in dev
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
