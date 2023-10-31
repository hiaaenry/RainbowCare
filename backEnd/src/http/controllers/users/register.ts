import { UserAlreadyExistsError } from "@/services/errors/users_already_exists_error";
import { makeRegisterService } from "@/services/factories/make_register_service";
import { Role } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["USER", "ADMIN"]),
    interested_tags: z.enum(["JOB", "BOOTCAMP"]).array(),
  });

  const { name, email, password, role, interested_tags } =
    registerBodySchema.parse(request.body);

  try {
    const registerService = makeRegisterService();

    await registerService.execute({
      name,
      email,
      password,
      role,
      interested_tags,
    });
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({
        message: error.message,
      });
    }
    throw error;
  }

  return reply.status(201).send();
}
