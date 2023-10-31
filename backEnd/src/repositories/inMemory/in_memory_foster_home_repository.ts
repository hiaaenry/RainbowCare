import { FosterHome, Prisma, Tag } from "@prisma/client";
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

  async searchMany(query: string, page: number) {
    return this.items
      .filter((item) => item.name.includes(query))
      .slice((page - 1) * 20, page * 20);
  }

  async create(data: Prisma.FosterHomeCreateInput) {
    const fosterHome = {
      id: "foster-home-id-1",
      name: data.name,
      tags: data.tags as Tag[],
      created_at: new Date(),
      description: data.description,
      recipient_email: data.recipient_email as Tag[],
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
