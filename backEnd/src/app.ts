import fastity from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";

export const app = fastity();

app.post("/users", async (request, reply) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  const { name, email } = registerBodySchema.parse(request.body);

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return reply.status(201).send();
});
