import fastity from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyJwt from "@fastify/jwt";

import { ZodError } from "zod";
import { env } from "./env";
import { swaggerOptions, swaggerUiOptions } from "./swagger";

import { userRouter } from "./http/controllers/users/routes";
import { fosterHomeRouter } from "./http/controllers/fosterHome/routes";

export const app = fastity();

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);

app.register(userRouter);
app.register(fosterHomeRouter);

app.register(fastifyJwt, {
  secret: env.JWT_SECRETS,
});

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  return reply.status(500).send({ message: "Internal server error." });
});
