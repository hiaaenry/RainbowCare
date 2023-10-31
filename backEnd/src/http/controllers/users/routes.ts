import { FastifyInstance } from "fastify";
import {
  middlewareDeleteUser,
  middlewareEditUserProfile,
  middlewareGetUserProfile,
  middlewareRegisterRoute,
  middlewareSessionRoute,
} from "@/http/middlewares/middleware";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { edit } from "./edit";
import { remove } from "./delete";

export async function userRouter(app: FastifyInstance) {
  app.post("/users", middlewareRegisterRoute, register);
  app.post("/sessions", middlewareSessionRoute, authenticate);
  app.get("/users/me", middlewareGetUserProfile, profile);
  app.put("/users/edit/:userId", middlewareEditUserProfile, edit);
  app.delete("/users/delete/:userId", middlewareDeleteUser, remove);
}
