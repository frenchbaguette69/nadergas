import { Prisma } from "@prisma/client";

export type TQuote = Prisma.QuoteGetPayload<{ include: { service: true } }>;
