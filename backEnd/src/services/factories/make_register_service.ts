import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";
import { RegisterService } from "../register";

export function makeRegisterService() {
  const usersRepository = new PrismaUsersRepository();
  const registerService = new RegisterService(usersRepository);

  return registerService;
}
