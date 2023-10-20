import { middlewareSendNotificationRoute } from "@/http/middlewares/middleware";
import { FastifyInstance } from "fastify";
import { sendNotification } from "./notification";

export async function notificationRouter(app: FastifyInstance) {
  app.post(
    "/send-notification",
    middlewareSendNotificationRoute,
    sendNotification
  );
}
