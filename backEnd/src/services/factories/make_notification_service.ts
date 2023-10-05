import { PrismaNotificationsRepository } from "@/repositories/prisma/prisma_notifications_repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma_users_repository";
import { SendNotificationService } from "../send_notification";

export function makeNotificationService() {
  const usersRepository = new PrismaUsersRepository();
  const sendNotificationRepository = new PrismaNotificationsRepository();
  const service = new SendNotificationService(
    sendNotificationRepository,
    usersRepository
  );

  return service;
}
