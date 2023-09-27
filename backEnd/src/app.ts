import fastity from "fastify";
import { appRoutes } from "./http/routes";

export const app = fastity();

app.register(appRoutes);
