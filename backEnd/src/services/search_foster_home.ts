import { FosterHomeRepository } from "@/repositories/foster_home_repository";
import { FosterHome } from "@prisma/client";

interface SearchFosterHomeServiceRequest {
  query: string;
  page: number;
}

interface SearchFosterHomeServiceResponse {
  fosterHomes: FosterHome[];
}

export class SearchFosterHomeService {
  constructor(private fosterHomeRepository: FosterHomeRepository) {}

  async execute({
    query,
    page,
  }: SearchFosterHomeServiceRequest): Promise<SearchFosterHomeServiceResponse> {
    const fosterHomes = await this.fosterHomeRepository.searchMany(query, page);

    return {
      fosterHomes,
    };
  }
}
