import { PrismaFosterHomeRepository } from "@/repositories/prisma/prisma_foster_home_repository";
import { EditFosterHomeService } from "../edit_foster_home";

export function makeEditFosterHomeService() {
  const fosterHomeRepository = new PrismaFosterHomeRepository();
  const service = new EditFosterHomeService(fosterHomeRepository);

  return service;
}
