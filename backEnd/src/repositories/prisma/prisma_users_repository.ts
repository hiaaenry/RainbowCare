import { prisma } from "@/lib/prisma";
import { Prisma, Tag, User } from "@prisma/client";
import { UsersRepository } from "../users_repository";

export class PrismaUsersRepository implements UsersRepository {
  async catchEmailfindByTag(tags: Tag[]) {
    const users = await prisma.user.findMany({
      where: {
        interested_tags: {
          hasSome: tags,
        } as Prisma.EnumTagNullableListFilter<"User">,
      },
      select: {
        email: true,
      },
    });

    if (users.length > 0) {
      return users[0].email;
    }

    return null;
  }

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

  async deleteUserById(data: User) {
    const user = await prisma.user.delete({
      where: {
        id: data.id,
      },
    });

    return user;
  }

  async comparePassword(password: string, confirmPassword: string) {
    return password === confirmPassword;
  }
}
