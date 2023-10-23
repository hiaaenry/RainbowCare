import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";
import { EditProfileService } from "../edit_profile";

export function makeEditProfileService() {
  const usersRepository = new PrismaUsersRepository();
  const service = new EditProfileService(usersRepository);

  return service;
}
