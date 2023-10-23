import { middlewareFosterHomeRoute } from "@/http/middlewares/middleware";
import { FastifyInstance } from "fastify";
import { create } from "./create";

export async function fosterHomeRouter(app: FastifyInstance) {
  app.post("/foster-home", middlewareFosterHomeRoute, create);
}
