import { FosterHome, Prisma } from "@prisma/client";

export interface FosterHomeRepository {
  create(data: Prisma.FosterHomeCreateInput): Promise<FosterHome>;
}
