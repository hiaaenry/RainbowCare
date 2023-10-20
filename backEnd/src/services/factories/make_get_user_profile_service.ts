import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";
import { GetUserProfileService } from "../get_user_profile";

export function makeGetUserProfileService() {
  const usersRepository = new PrismaUsersRepository();
  const service = new GetUserProfileService(usersRepository);

  return service;
}
