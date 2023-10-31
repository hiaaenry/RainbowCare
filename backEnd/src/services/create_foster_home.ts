import { FosterHome, Tag } from "@prisma/client";
import { FosterHomeRepository } from "@/repositories/foster_home_repository";

interface CreateFosterHomeServiceRequest {
  name: string;
  tags?: Tag[];
}

interface CreateFosterHomeServiceResponse {
  fosterHome: FosterHome;
}

export class CreateFosterHomeService {
  constructor(private fosterHomeRepository: FosterHomeRepository) {}

  async execute({
    name,
    tags,
  }: CreateFosterHomeServiceRequest): Promise<CreateFosterHomeServiceResponse> {
    const fosterHome = await this.fosterHomeRepository.create({
      name,
      tags,
    });

    return {
      fosterHome,
    };
  }
}
