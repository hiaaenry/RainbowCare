import {
  middlewareCreateFosterHomeRoute,
  middlewareEditFosterHomeRoute,
  middlewareSearchFosterHomeRoute,
} from "@/http/middlewares/middleware";
import { FastifyInstance } from "fastify";
import { create } from "./create";
import { search } from "./search";
import { edit } from "./edit";

export async function fosterHomeRouter(app: FastifyInstance) {
  app.post("/foster-home", middlewareCreateFosterHomeRoute, create);
  app.put("/foster-home", middlewareEditFosterHomeRoute, edit);
  app.get("/foster-home", middlewareSearchFosterHomeRoute, search);
}
