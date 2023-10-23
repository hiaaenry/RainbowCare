import { FosterHome, Prisma } from "@prisma/client";

export interface FosterHomeRepository {
  findById(id: string): Promise<FosterHome | null>;
  create(data: Prisma.FosterHomeCreateInput): Promise<FosterHome>;
  save(fosterHome: FosterHome): Promise<FosterHome>;
}
