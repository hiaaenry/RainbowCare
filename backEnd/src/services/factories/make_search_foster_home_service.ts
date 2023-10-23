import { SearchFosterHomeService } from "../search_foster_home";
import { PrismaFosterHomeRepository } from "@/repositories/prisma/prisma_foster_home_repository";

export function makeSearchFosterHomeService() {
  const fosterHomeRepository = new PrismaFosterHomeRepository();
  const service = new SearchFosterHomeService(fosterHomeRepository);

  return service;
}
