import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";
import { DeleteUserProfileService } from "../delete_user";

export function makeDeleteUserProfileService() {
  const usersRepository = new PrismaUsersRepository();
  const service = new DeleteUserProfileService(usersRepository);

  return service;
}
