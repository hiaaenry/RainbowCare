import { FastifyInstance } from "fastify";
import { create } from "./create";
import { search } from "./search";
import { edit } from "./edit";
import { verifyJWT } from "@/http/middlewares/verifyJWT";

export async function fosterHomeRouter(app: FastifyInstance) {
  app.post("/foster-home", { onRequest: [verifyJWT] }, create);
  app.put("/foster-home", { onRequest: [verifyJWT] }, edit);
  app.get("/foster-home", search);
}
