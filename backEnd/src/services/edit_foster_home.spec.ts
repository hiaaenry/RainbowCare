import { InMemoryFosterHomeRepository } from "@/repositories/inMemory/in_memory_foster_home_repository";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { beforeEach, describe, expect, it } from "vitest";
import { EditFosterHomeService } from "./edit_foster_home";
import { hash } from "bcryptjs";
import { AuthenticateService } from "./authenticate";

let usersRepository: InMemoryUsersRepository;
let fosterHomeRepository: InMemoryFosterHomeRepository;
let authenticateService: AuthenticateService;
let sut: EditFosterHomeService;

describe("Edit Foster Home", () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    fosterHomeRepository = new InMemoryFosterHomeRepository();
    authenticateService = new AuthenticateService(usersRepository);
    sut = new EditFosterHomeService(usersRepository, fosterHomeRepository);

    await usersRepository.create({
      name: "User Name Test",
      email: "test.email@example.com",
      password_hash: await hash("passwordtest", 6),
      role: "ADMIN",
    });
  });

  it("should be able to edit foster home", async () => {
    const { user } = await authenticateService.execute({
      email: "test.email@example.com",
      password: "passwordtest",
    });

    const edit = await fosterHomeRepository.create({
      name: "Foster Home",
    });

    const { fosterHome } = await sut.execute({
      userId: user.id,
      fosterHomeId: edit.id,
      name: "Foster Home Edit",
    });

    expect(fosterHome.name).toEqual("Foster Home Edit");
  });
});
