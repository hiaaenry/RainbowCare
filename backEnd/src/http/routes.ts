import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { authenticate } from "./controllers/authenticate";
import { sendNotification } from "./controllers/notification";
import { create } from "./controllers/foster_home";
import {
  middlewareFosterHomeRoute,
  middlewareRegisterRoute,
  middlewareSendNotificationRoute,
  middlewareSessionRoute,
} from "./middlewares/middleware";
import { profile } from "./controllers/profile";
import { verifyJWT } from "./middlewares/verifyJWT";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", middlewareRegisterRoute, register);
  app.post("/sessions", middlewareSessionRoute, authenticate);
  app.post(
    "/send-notification",
    middlewareSendNotificationRoute,
    sendNotification
  );
  app.post("/users/foster-home", middlewareFosterHomeRoute, create);
  app.get("/users/me", { onRequest: [verifyJWT] }, profile);
}
