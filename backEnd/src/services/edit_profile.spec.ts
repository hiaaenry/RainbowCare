import { beforeEach, describe, it, expect } from "vitest";
import { EditProfileService } from "./edit_profile";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { hash } from "bcryptjs";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";

let usersRepository: InMemoryUsersRepository;
let sut: EditProfileService;

describe("Edit User Profile Service", async () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new EditProfileService(usersRepository);
  });

  it("should be able to edit user profile", async () => {
    const createdUser = await usersRepository.create({
      name: "User",
      last_name: "Name Test",
      email: "test.email@example.com",
      password_hash: await hash("passwordtest", 6),
    });

    const { user } = await sut.execute({
      userId: createdUser.id,
      name: "User Name Edit",
      email: "edit.email@example.com",
    });

    expect(user.id).toEqual(expect.any(String));
    expect(user.name).toEqual("User Name Edit");
  });

  it("should not be able to edit user profile with wrong id", async () => {
    expect(async () => {
      await sut.execute({
        userId: "non-existing-id",
        name: "User Name Edit",
        email: "edit.email@example.com",
      });
    }).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
