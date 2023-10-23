import { middlewareFosterHomeRoute } from "@/http/middlewares/middleware";
import { FastifyInstance } from "fastify";
import { create } from "./create";
import { search } from "./search";
import { edit } from "./edit";
import { verifyJWT } from "@/http/middlewares/verifyJWT";

export async function fosterHomeRouter(app: FastifyInstance) {
  app.post("/foster-home", middlewareFosterHomeRoute, create);
  app.put("/foster-home/:userId", { onRequest: [verifyJWT] }, edit);
}
