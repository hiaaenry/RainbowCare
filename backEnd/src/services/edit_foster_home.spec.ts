import { InMemoryFosterHomeRepository } from "@/repositories/inMemory/in_memory_foster_home_repository";
import { beforeEach, describe, expect, it } from "vitest";
import { EditFosterHomeService } from "./edit_foster_home";

let fosterHomeRepository: InMemoryFosterHomeRepository;
let sut: EditFosterHomeService;

describe("Edit Foster Home", () => {
  beforeEach(async () => {
    fosterHomeRepository = new InMemoryFosterHomeRepository();
    sut = new EditFosterHomeService(fosterHomeRepository);
  });

  it("should be able to edit foster home", async () => {
    const edit = await fosterHomeRepository.create({
      name: "Foster Home",
    });

    const { fosterHome } = await sut.execute({
      fosterHomeId: edit.id,
      name: "Foster Home Edit",
    });

    expect(fosterHome.name).toEqual("Foster Home Edit");
  });
});
