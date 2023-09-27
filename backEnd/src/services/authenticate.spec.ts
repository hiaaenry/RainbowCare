import { describe, expect, it } from "vitest";
import { AuthenticateService } from "./authenticate";
import { hash } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { InvalidCredentialsError } from "./errors/invalid_credentials_error";

describe("Authenticate Service", () => {
  it("should be able to authenticate", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const sut = new AuthenticateService(usersRepository);

    await usersRepository.create({
      name: "User Test Name",
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
    const usersRepository = new InMemoryUsersRepository();
    const sut = new AuthenticateService(usersRepository);

    await expect(() =>
      sut.execute({
        email: "user.test.email@example.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const sut = new AuthenticateService(usersRepository);

    await usersRepository.create({
      name: "User Test Name",
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
