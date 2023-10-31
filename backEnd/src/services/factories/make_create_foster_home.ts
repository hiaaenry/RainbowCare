import { PrismaFosterHomeRepository } from "@/repositories/prisma/prisma_foster_home_repository";
import { CreateFosterHomeService } from "../create_foster_home";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";

export function makeCreateFosterHomeService() {
  const usersRepository = new PrismaUsersRepository();
  const fosterHomeRepository = new PrismaFosterHomeRepository();
  const service = new CreateFosterHomeService(
    usersRepository,
    fosterHomeRepository
  );

  return service;
}
