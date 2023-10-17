import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { authenticate } from "./controllers/authenticate";
import { sendNotification } from "./controllers/notification";
import {
  swaggerRegisterRoute,
  swaggerSendNotificationRoute,
  swaggerSessionRoute,
} from "@/swagger";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", swaggerRegisterRoute, register);
  app.post("/sessions", swaggerSessionRoute, authenticate);
  app.post(
    "/send-notification",
    swaggerSendNotificationRoute,
    sendNotification
  );
}
