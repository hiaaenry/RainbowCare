import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";
import { AuthenticateService } from "../authenticate";

export function makeAuthenticateService() {
  const usersRepository = new PrismaUsersRepository();
  const service = new AuthenticateService(usersRepository);

  return service;
}
