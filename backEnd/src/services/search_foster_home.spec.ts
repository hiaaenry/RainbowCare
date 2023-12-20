import { InMemoryFosterHomeRepository } from "@/repositories/inMemory/in_memory_foster_home_repository";
import { beforeEach, describe, expect, it } from "vitest";
import { SearchFosterHomeService } from "./search_foster_home";

let fosterHomeRepository: InMemoryFosterHomeRepository;
let sut: SearchFosterHomeService;

describe("Search Foster Home", async () => {
  beforeEach(() => {
    fosterHomeRepository = new InMemoryFosterHomeRepository();
    sut = new SearchFosterHomeService(fosterHomeRepository);
  });

  it("should be able to search foster home", async () => {
    await fosterHomeRepository.create({
      name: "Name Test Foster Home 1",
      description: "Description",
      neighborhood: "neighborhood",
      phone_number: "81988888888",
      site: "www.site.com",
      social_network: "@social_network",
      state: "state",
      street: "street",
      house_number: "001",
    });

    await fosterHomeRepository.create({
      name: "Name Test Foster Home 2",
      description: "Description",
      neighborhood: "neighborhood",
      phone_number: "81988888888",
      site: "www.site.com",
      social_network: "@social_network",
      state: "state",
      street: "street",
      house_number: "001",
    });

    const { fosterHomes } = await sut.execute({
      query: "Name Test Foster Home 1",
      page: 1,
    });

    expect(fosterHomes).toHaveLength(1);
    expect(fosterHomes).toEqual([
      expect.objectContaining({ name: "Name Test Foster Home 1" }),
    ]);
  });
});
