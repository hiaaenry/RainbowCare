import { prisma } from "@/lib/prisma";
import { $Enums, Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users_repository";

export class PrismaUsersRepository implements UsersRepository {
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
  async save(data: User) {
    const user = await prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    });

    return user;
  }

  async delete(data: User) {
    await prisma.user.delete({
      where: {
        id: data.id,
      },
    });
  }
}
