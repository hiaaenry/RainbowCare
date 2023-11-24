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
    });

    await fosterHomeRepository.create({
      name: "Name Test Foster Home 2",
      description: "Description",
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
