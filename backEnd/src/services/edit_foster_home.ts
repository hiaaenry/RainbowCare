import { FosterHomeRepository } from "@/repositories/foster_home_repository";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";
import { UsersRepository } from "@/repositories/users_repository";
import { FosterHome } from "@prisma/client";

interface EditFosterHomeServiceRequest {
  fosterHomeId: string;
  name: string;
}

interface EditFosterHomeServiceResponse {
  fosterHome: FosterHome;
}

export class EditFosterHomeService {
  constructor(private fosterHomeRepository: FosterHomeRepository) {}

  async execute({
    fosterHomeId,
    name,
  }: EditFosterHomeServiceRequest): Promise<EditFosterHomeServiceResponse> {
    const fosterHome = await this.fosterHomeRepository.findById(fosterHomeId);

    if (!fosterHome) {
      throw new ResourceNotFoundError();
    }

    fosterHome.name = name;

    await this.fosterHomeRepository.save(fosterHome);

    return {
      fosterHome,
    };
  }
}
