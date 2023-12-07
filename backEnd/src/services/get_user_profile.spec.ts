import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { beforeEach, describe, expect, it } from "vitest";
import { GetUserProfileService } from "./get_user_profile";
import { hash } from "bcryptjs";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";

let usersRepository: InMemoryUsersRepository;
let sut: GetUserProfileService;

describe("Get User Profile Service", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new GetUserProfileService(usersRepository);
  });

  it("should be able to get user profile", async () => {
    const createdUser = await usersRepository.create({
      name: "User",
      last_name: "Test Name",
      email: "email.test@example.com",
      password_hash: await hash("passwordtest", 6),
    });

    const { user } = await sut.execute({
      userId: createdUser.id,
    });

    expect(user.id).toEqual(expect.any(String));
    expect(user.name).toEqual("User");
  });

  it("should not be able to get user profile with wrong id", async () => {
    expect(async () => {
      await sut.execute({
        userId: "non-existing-id",
      });
    }).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
