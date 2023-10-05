import { UserAlreadyExistsError } from "@/services/errors/users_already_exists_error";
import { makeNotificationService } from "@/services/factories/make_notification_service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import * as nodemailer from "nodemailer";

export async function sendNotification(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const sendNotificationBodySchema = z.object({
    recipientEmail: z.string(),
    title: z.string(),
    content: z.string(),
  });

  const { recipientEmail, title, content } = sendNotificationBodySchema.parse(
    request.body
  );

  try {
    const sendNotificationService = makeNotificationService();

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "f19ea46a5068e6",
        pass: "be63ee04dc7535",
      },
    });

    transport
      .sendMail({
        from: "8d567914ae-a56ed9@inbox.mailtrap.io",
        to: recipientEmail,
        subject: title,
        text: content,
      })
      .then(async () => {
        await sendNotificationService.execute({
          recipientEmail,
          title,
          content,
        });
      })
      .catch((error) => {
        return reply.status(400).send({
          message: error.message,
        });
      });
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({
        message: error.message,
      });
    }
    throw error;
  }

  return reply.status(201).send();
}
