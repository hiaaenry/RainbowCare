import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { edit } from "./edit";
import { remove } from "./delete";
import { verifyJWT } from "@/http/middlewares/verifyJWT";

export async function userRouter(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/sessions", authenticate);
  app.get("/users/me", { onRequest: [verifyJWT] }, profile);
  app.put("/users/edit/:userId", { onRequest: [verifyJWT] }, edit);
  app.delete("/users/delete/:userId", { onRequest: [verifyJWT] }, remove);
}
