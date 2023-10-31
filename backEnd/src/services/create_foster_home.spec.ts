import { beforeEach, describe, expect, it } from "vitest";
import { FosterHomeRepository } from "@/repositories/foster_home_repository";
import { InMemoryFosterHomeRepository } from "@/repositories/inMemory/in_memory_foster_home_repository";
import { CreateFosterHomeService } from "./create_foster_home";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";

let fosterHomeRepository: FosterHomeRepository;
let usersRepository: InMemoryUsersRepository;
let sut: CreateFosterHomeService;

describe("Create Foster Home Service", () => {
  beforeEach(async () => {
    fosterHomeRepository = new InMemoryFosterHomeRepository();
    usersRepository = new InMemoryUsersRepository();
    sut = new CreateFosterHomeService(usersRepository, fosterHomeRepository);
  });

  it("should be able to create foster home", async () => {
    const { fosterHome } = await sut.execute({
      name: "Foster Home Test Name",
      tags: ["JOB"],
      description: "description",
    });

    expect(fosterHome.id).toEqual(expect.any(String));
  });
});
