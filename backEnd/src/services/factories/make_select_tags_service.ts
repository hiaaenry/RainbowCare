import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";
import { SelectTags } from "../select_tags";

export function makeSelectTagsService() {
  const usersRepository = new PrismaUsersRepository();
  const service = new SelectTags(usersRepository);

  return service;
}
