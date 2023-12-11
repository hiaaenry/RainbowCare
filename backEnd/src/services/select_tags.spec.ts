import { beforeEach, describe, it, expect } from "vitest";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { hash } from "bcryptjs";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";
import { SelectTags } from "./select_tags";

let usersRepository: InMemoryUsersRepository;
let sut: SelectTags;

describe("Select Tags", async () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new SelectTags(usersRepository);
  });

  it("should be able to select tags", async () => {
    const createdUser = await usersRepository.create({
      name: "User",
      last_name: "Name Test",
      email: "test.email@example.com",
      password_hash: await hash("passwordtest", 6),
    });

    const { user } = await sut.execute({
      userId: createdUser.id,
      interested_tags: ["BOOTCAMP"],
    });

    expect(user.id).toEqual(expect.any(String));
    expect(user.interested_tags).toEqual(["BOOTCAMP"]);
  });

  it("should not be able to select tags with wrong id", async () => {
    expect(async () => {
      await sut.execute({
        userId: "non-existing-id",
        interested_tags: ["BOOTCAMP"],
      });
    }).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
