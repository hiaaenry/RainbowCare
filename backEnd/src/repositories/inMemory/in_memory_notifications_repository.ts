import { Prisma, Notification } from "@prisma/client";
import { NotificationsRepository } from "../notifications_repository";

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = [];

  async create(data: Prisma.NotificationUncheckedCreateInput) {
    const notification = {
      id: "notification-id-1",
      title: data.title,
      content: data.content,
      recipient_email: data.recipient_email,
      created_at: new Date(),
    };

    this.items.push(notification);

    return notification;
  }
}
