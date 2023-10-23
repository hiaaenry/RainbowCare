import { PrismaFosterHomeRepository } from "@/repositories/prisma/prisma_foster_home_repository";
import { EditFosterHomeService } from "../edit_foster_home";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";

export function makeEditFosterHomeService() {
  const usersRepository = new PrismaUsersRepository();
  const fosterHomeRepository = new PrismaFosterHomeRepository();
  const service = new EditFosterHomeService(
    usersRepository,
    fosterHomeRepository
  );

  return service;
}
