import { FosterHome, Prisma } from "@prisma/client";
import { FosterHomeRepository } from "../foster_home_repository";

export class InMemoryFosterHomeRepository implements FosterHomeRepository {
  public items: FosterHome[] = [];

  async create(data: Prisma.FosterHomeCreateInput) {
    const fosterHome = {
      id: "foster-home-id-1",
      name: data.name,
      created_at: new Date(),
    };

    this.items.push(fosterHome);

    return fosterHome;
  }
}
