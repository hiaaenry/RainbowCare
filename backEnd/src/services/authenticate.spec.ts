import { beforeEach, describe, expect, it } from "vitest";
import { AuthenticateService } from "./authenticate";
import { hash } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { InvalidCredentialsError } from "./errors/invalid_credentials_error";

let usersRepository: InMemoryUsersRepository;
let sut: AuthenticateService;

describe("Authenticate Service", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new AuthenticateService(usersRepository);
  });

  it("should be able to authenticate", async () => {
    await usersRepository.create({
      name: "User",
      last_name: "Test Name",
      email: "user.test.email@example.com",
      password_hash: await hash("123456", 6),
    });

    const { user } = await sut.execute({
      email: "user.test.email@example.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should not be able to authenticate with wrong email", async () => {
    await expect(() =>
      sut.execute({
        email: "user.test.email@example.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    await usersRepository.create({
      name: "User",
      last_name: "Test Name",
      email: "user.test.email@example.com",
      password_hash: await hash("123456", 6),
    });

    await expect(() =>
      sut.execute({
        email: "user.test.email@example.com",
        password: "654321",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});
