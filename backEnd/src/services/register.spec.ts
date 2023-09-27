import { describe, expect, it } from "vitest";
import { RegisterService } from "./register";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { UserAlreadyExistsError } from "./errors/users_already_exists_error";

describe("Register Service", () => {
  it("should be able to register", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerService = new RegisterService(usersRepository);

    const { user } = await registerService.execute({
      name: "User Test Name",
      email: "user.test.email@example.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should hash user password upon registration", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerService = new RegisterService(usersRepository);

    const { user } = await registerService.execute({
      name: "User Test Name",
      email: "user.test.email@example.com",
      password: "123456",
    });

    const isPasswordCorrectlyHashed = await compare(
      "123456",
      user.password_hash
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("should not be able to register with same email twice", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerService = new RegisterService(usersRepository);

    const email = "user.test.email@example.com";

    await registerService.execute({
      name: "User Test Name",
      email: email,
      password: "123456",
    });

    expect(() =>
      registerService.execute({
        name: "User Test Name",
        email: email,
        password: "123456",
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
