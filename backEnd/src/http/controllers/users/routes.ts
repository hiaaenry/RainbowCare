import { FastifyInstance } from "fastify";
import {
  middlewareRegisterRoute,
  middlewareSessionRoute,
} from "@/http/middlewares/middleware";
import { verifyJWT } from "@/http/middlewares/verifyJWT";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { edit } from "./edit_profile";

export async function userRouter(app: FastifyInstance) {
  app.post("/users", middlewareRegisterRoute, register);
  app.post("/sessions", middlewareSessionRoute, authenticate);
  app.get("/users/me", { onRequest: [verifyJWT] }, profile);
  app.put("/users/edit/:userId", edit);
}
