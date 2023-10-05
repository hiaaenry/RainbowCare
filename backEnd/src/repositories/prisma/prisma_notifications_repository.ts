import { Prisma } from "@prisma/client";
import { NotificationsRepository } from "../notifications_repository";
import { prisma } from "@/lib/prisma";

export class PrismaNotificationsRepository implements NotificationsRepository {
  async create(data: Prisma.NotificationUncheckedCreateInput) {
    const notification = await prisma.notification.create({
      data,
    });

    return notification;
  }
}
