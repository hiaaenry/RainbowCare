import { beforeEach, describe, expect, it } from "vitest";
import { DeleteUserProfileService } from "./delete_user";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { hash } from "bcryptjs";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";

let usersRepository: InMemoryUsersRepository;
let sut: DeleteUserProfileService;

describe("Delete User Profile Service", () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    sut = new DeleteUserProfileService(usersRepository);
  });

  it("should be able to delete user by id", async () => {
    const user = await usersRepository.create({
      name: "User",
      last_name: "Name Test",
      email: "test.email@example.com",
      password_hash: await hash("password", 6),
    });

    const deleteUser = await sut.execute({
      userId: user.id,
    });

    expect(deleteUser).toEqual({});
  });

  it("should not be able to delete user", async () => {
    expect(async () => {
      await sut.execute({
        userId: "non-existing-id",
      });
    }).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
