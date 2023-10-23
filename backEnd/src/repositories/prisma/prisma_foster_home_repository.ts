import { FosterHome, Prisma } from "@prisma/client";
import { FosterHomeRepository } from "../foster_home_repository";
import { prisma } from "@/lib/prisma";

export class PrismaFosterHomeRepository implements FosterHomeRepository {
  async findById(id: string) {
    const fosterHome = await prisma.fosterHome.findUnique({
      where: {
        id,
      },
    });

    return fosterHome;
  }

  async create(data: Prisma.FosterHomeCreateInput) {
    const fosterHome = await prisma.fosterHome.create({
      data,
    });

    return fosterHome;
  }

  async save(data: FosterHome) {
    const fosterHome = await prisma.fosterHome.update({
      where: {
        id: data.id,
      },
      data,
    });

    return fosterHome;
  }
}