import { FosterHome, Prisma } from "@prisma/client";

export interface FosterHomeRepository {
  findById(id: string): Promise<FosterHome | null>;
  searchMany(query: string, page: number): Promise<FosterHome[]>;
  create(data: Prisma.FosterHomeCreateInput): Promise<FosterHome>;
  save(fosterHome: FosterHome): Promise<FosterHome>;
}
