import { FosterHome } from "@prisma/client";
import { FosterHomeRepository } from "@/repositories/foster_home_repository";

interface CreateFosterHomeServiceRequest {
  name: string;
}

interface CreateFosterHomeServiceResponse {
  fosterHome: FosterHome;
}

export class CreateFosterHomeService {
  constructor(private fosterHomeRepository: FosterHomeRepository) {}

  async execute({
    name,
  }: CreateFosterHomeServiceRequest): Promise<CreateFosterHomeServiceResponse> {
    const fosterHome = await this.fosterHomeRepository.create({
      name,
    });

    return {
      fosterHome,
    };
  }
}
