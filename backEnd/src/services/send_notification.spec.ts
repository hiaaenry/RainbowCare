import { beforeEach, describe, expect, it } from "vitest";
import { hash } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/inMemory/in_memory_users_repository";
import { InMemoryNotificationsRepository } from "@/repositories/inMemory/in_memory_notifications_repository";
import { SendNotificationService } from "./send_notification";

let notificationRepository: InMemoryNotificationsRepository;
let usersRepository: InMemoryUsersRepository;
let sut: SendNotificationService;

describe("Register Service", () => {
  beforeEach(async () => {
    notificationRepository = new InMemoryNotificationsRepository();
    usersRepository = new InMemoryUsersRepository();
    sut = new SendNotificationService(notificationRepository, usersRepository);

    const password = await hash("password.test", 6);

    await usersRepository.create({
      id: "user-id-01",
      name: "User Test",
      email: "user.test@example.com",
      password_hash: password,
    });
  });

  it("should be able to send notification", async () => {
    const { notification } = await sut.execute({
      recipientEmail: "user.test@example.com",
      title: "Title Test",
      content: "Content Test",
    });

    expect(notification.id).toEqual(expect.any(String));
  });
});
