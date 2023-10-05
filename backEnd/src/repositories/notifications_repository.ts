import { Prisma, Notification } from "@prisma/client";

export interface NotificationsRepository {
  create(data: Prisma.NotificationUncheckedCreateInput): Promise<Notification>;
}
