import { Prisma } from "@prisma/client";
import { FosterHomeRepository } from "../foster_home_repository";
import { prisma } from "@/lib/prisma";

export class PrismaFosterHomeRepository implements FosterHomeRepository {
  async create(data: Prisma.FosterHomeCreateInput) {
    const fosterHome = await prisma.fosterHome.create({
      data,
    });

    return fosterHome;
  }
}
