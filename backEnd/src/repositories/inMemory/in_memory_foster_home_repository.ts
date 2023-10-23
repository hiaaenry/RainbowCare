import { FosterHome, Prisma } from "@prisma/client";
import { FosterHomeRepository } from "../foster_home_repository";

export class InMemoryFosterHomeRepository implements FosterHomeRepository {
  public items: FosterHome[] = [];

  async findById(id: string) {
    const fosterHome = this.items.find((item) => item.id === id);

    if (!fosterHome) {
      return null;
    }

    return fosterHome;
  }

  async create(data: Prisma.FosterHomeCreateInput) {
    const fosterHome = {
      id: "foster-home-id-1",
      name: data.name,
      created_at: new Date(),
    };

    this.items.push(fosterHome);

    return fosterHome;
  }

  async save(data: FosterHome) {
    const fosterHomeIndex = this.items.findIndex((item) => item.id === data.id);

    if (fosterHomeIndex >= 0) {
      this.items[fosterHomeIndex] = data;
    }

    return data;
  }
}
