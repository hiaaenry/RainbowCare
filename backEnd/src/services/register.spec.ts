import { beforeEach, describe, expect, it } from "vitest";
import { RegisterService } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { UserAlreadyExistsError } from "./errors/users_already_exists_error";
import { PasswordsNotMatch } from "./errors/passwords_not_match";

let usersRepository: InMemoryUsersRepository;
let sut: RegisterService;

describe("Register Service", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new RegisterService(usersRepository);
  });

  it("should be able to register", async () => {
    const { user } = await sut.execute({
      name: "User",
      last_name: "Test Name",
      email: "user.test.email@example.com",
      password: "123456",
      confirm_password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should not be able to register with passwords that do not match", async () => {
    await expect(() =>
      sut.execute({
        name: "User",
        last_name: "Test Name",
        email: "user.test.email@example.com",
        password: "123456",
        confirm_password: "654321",
      })
    ).rejects.toBeInstanceOf(PasswordsNotMatch);
  });

  it("should hash user password upon registration", async () => {
    const { user } = await sut.execute({
      name: "User",
      last_name: "Test Name",
      email: "user.test.email@example.com",
      password: "123456",
      confirm_password: "123456",
    });

    const isPasswordCorrectlyHashed = await compare(
      "123456",
      user.password_hash
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("should not be able to register with same email twice", async () => {
    const email = "user.test.email@example.com";

    await sut.execute({
      name: "User",
      last_name: "Test Name",
      email: email,
      password: "123456",
      confirm_password: "123456",
    });

    await expect(() =>
      sut.execute({
        name: "User",
        last_name: "Test Name",
        email: email,
        password: "123456",
        confirm_password: "123456",
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
