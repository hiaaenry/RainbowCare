import { PrismaFosterHomeRepository } from "@/repositories/prisma/prisma_foster_home_repository";
import { CreateFosterHomeService } from "../create_foster_home";

export function makeCreateFosterHomeService() {
  const fosterHomeRepository = new PrismaFosterHomeRepository();
  const service = new CreateFosterHomeService(fosterHomeRepository);

  return service;
}
