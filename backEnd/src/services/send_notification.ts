import { NotificationsRepository } from "@/repositories/notifications_repository";
import { UsersRepository } from "@/repositories/users_repository";
import { Notification } from "@prisma/client";

interface SendNotificationServiceRequest {
  recipientEmail: string;
  title: string;
  content: string;
}

interface SendNotificationServiceResponse {
  notification: Notification;
}

export class SendNotificationService {
  constructor(
    private sendNotificationsRepository: NotificationsRepository,
    private usersRepository: UsersRepository
  ) {}

  async execute({
    recipientEmail,
    title,
    content,
  }: SendNotificationServiceRequest): Promise<SendNotificationServiceResponse> {
    const user = await this.usersRepository.findByEmail(recipientEmail);

    if (!user) {
      throw new Error("user not found");
    }

    const notification = await this.sendNotificationsRepository.create({
      recipient_email: recipientEmail,
      title,
      content,
    });

    return {
      notification,
    };
  }
}
