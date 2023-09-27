import { prisma } from "@/lib/prisma";
import { PrismaUsersRepository } from "@/repositories/prisma_users_repository";
import { hash } from "bcryptjs";

interface RegisterServiceRequest {
  name: string;
  email: string;
  password: string;
}

export async function registerService({
  name,
  email,
  password,
}: RegisterServiceRequest) {
  const password_hash = await hash(password, 6);

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userWithSameEmail) {
    throw new Error("Email already exists!");
  }

  const prismaUsersRepository = new PrismaUsersRepository();

  prismaUsersRepository.create({
    name,
    email,
    password_hash,
  });
}
